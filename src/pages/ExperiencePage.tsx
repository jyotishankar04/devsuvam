import { Education } from "@/components/home/education";
import { CallToAction } from "@/components/home/cta";
import { MonoLabel, Panel, PanelDescription, PanelHeader, PanelTitle } from "@/components/layout/panel";
import { StripeSeparator } from "@/components/layout/separator";
import { WorkExperience } from "@/components/ncdai/work-experience";
import { EXPERIENCES } from "@/data";

export default function ExperiencePage() {
  return (
    <>
      <Panel className="screen-line-top-none">
        <PanelHeader className="pt-10">
          <MonoLabel>Timeline</MonoLabel>
          <PanelTitle asChild className="mt-2">
            <h1>Experience</h1>
          </PanelTitle>
          <PanelDescription className="pt-2">
            Where I've worked and what I shipped there. Expand a role for the details.
          </PanelDescription>
        </PanelHeader>

        <WorkExperience className="bg-transparent pr-2" experiences={EXPERIENCES} />
      </Panel>

      <StripeSeparator />
      <Education />

      <StripeSeparator />
      <CallToAction
        title="Let's build something meaningful."
        description="If you're hiring for backend or full-stack work, I'd love to hear about it."
      />
    </>
  );
}
