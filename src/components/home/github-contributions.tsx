import { Panel } from "@/components/layout/panel"
import { GitHubActivity } from "@/components/rareui/github-activity"
import { USER } from "@/data"

export function GitHubContributions() {
  return (
    <Panel className="screen-line-top-none">
      <h2 className="sr-only">GitHub contributions</h2>

      <div className="border-b border-line px-4 py-2">
        <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
          Fig. 2 — Contributions
        </p>
      </div>

      <div className="flex justify-center p-3 sm:p-4">
        <GitHubActivity username={USER.username} showMonths showRepos={false} />
      </div>
    </Panel>
  )
}
