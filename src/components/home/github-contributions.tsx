import { useMemo, useState } from "react"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

import { Panel } from "@/components/layout/panel"
import {
  GitHubContributions as ContributionsGraph,
  GitHubContributionsFallback,
} from "@/components/ncdai/github-contributions"
import { AnimatedCounter } from "@/components/rareui/animated-counter"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { USER } from "@/data"
import {
  fetchGitHubContributions,
  normalizeLastYear,
  normalizeYear,
} from "@/utils/github-stat"

type YearValue = "last" | number

const currentYear = new Date().getFullYear()
const YEARS = Array.from({ length: 5 }, (_, i) => currentYear - i)

export function GitHubContributions() {
  const [year, setYear] = useState<YearValue>("last")

  const { data, isPending, isError } = useQuery({
    queryKey: ["github-contributions", USER.username, year],
    queryFn: () => fetchGitHubContributions(year),
    placeholderData: keepPreviousData,
    staleTime: 24 * 60 * 60 * 1000,
  })

  const { activities, total } = useMemo(() => {
    if (!data) return { activities: [], total: 0 }
    if (year === "last") {
      const activities = normalizeLastYear(data.contributions)
      return { activities, total: activities.reduce((sum, day) => sum + day.count, 0) }
    }
    return {
      activities: normalizeYear(data.contributions, year),
      total: data.total[year] ?? 0,
    }
  }, [data, year])

  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">GitHub contributions</h2>

      <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-2">
        <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
          Fig. 2 — Contributions
        </p>

        <Select
          value={year.toString()}
          onValueChange={(value) => setYear(value === "last" ? "last" : Number(value))}
        >
          <SelectTrigger size="sm" className="h-7 w-auto gap-1.5 border-line font-mono text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="last">Last 12 months</SelectItem>
            {YEARS.map((y) => (
              <SelectItem key={y} value={y.toString()}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isPending ? (
        <GitHubContributionsFallback />
      ) : isError ? (
        <div className="flex h-40.5 items-center justify-center text-sm text-muted-foreground">
          Couldn't load contributions right now.
        </div>
      ) : (
        <ContributionsGraph
          data={activities}
          footer={
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground">
                <AnimatedCounter value={total} />
              </span>{" "}
              contributions {year === "last" ? "in the last year" : `in ${year}`} on{" "}
              <a
                className="text-foreground link-underline"
                href={USER.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          }
        />
      )}
    </Panel>
  )
}
