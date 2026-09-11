import type { ReactNode } from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Spinner } from "@/components/ui/spinner"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Activity } from "@/components/ncdai/contribution-graph"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
} from "@/components/ncdai/contribution-graph"

// Adapted from @ncdai/github-contributions: takes resolved `data` (fetched via
// react-query in the SPA) instead of a Suspense promise, and a custom footer.
export function GitHubContributions({
  data,
  footer,
  className,
}: {
  data: Activity[]
  footer?: ReactNode
  className?: string
}) {
  return (
    <ContributionGraph
      className={cn("mx-auto py-2", className)}
      data={data}
      blockSize={11}
      blockMargin={3}
      blockRadius={2}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <g>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                />
              </g>
            </TooltipTrigger>
            <TooltipContent className="font-sans">
              <p>
                {activity.count} contribution{activity.count === 1 ? null : "s"}{" "}
                on {format(new Date(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="items-center justify-between px-2">
        {footer ?? <span />}
        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <Spinner className="text-muted-foreground" />
    </div>
  )
}
