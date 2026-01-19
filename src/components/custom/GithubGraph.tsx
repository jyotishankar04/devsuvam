/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


type YearValue = number | "last";


const currentYear = new Date().getFullYear();
const years = Array.from({ length: 6 }, (_, i) => currentYear - i);

interface YearSelectProps {
    value: YearValue;
    onChange: (value: YearValue) => void;
}



import { useEffect, useState } from "react";

import {
    ContributionGraph,
    ContributionGraphCalendar,
    ContributionGraphBlock,
    ContributionGraphFooter,
    ContributionGraphLegend,
    ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { fetchGitHubContributions, normalizeLastYear, normalizeYear } from "@/utils/github-stat";


export default function GitHubContributionGraph() {
    const [year, setYear] = useState<YearValue>("last");
    const [data, setData] = useState<any[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchGitHubContributions(year).then((res) => {
            if (year === "last") {
                const normalized = normalizeLastYear(res.contributions);
                setData(normalized);
                setTotal(normalized.reduce((s, d) => s + d.count, 0));
            } else {
                const normalized = normalizeYear(res.contributions, year);
                setData(normalized);
                setTotal(res.total[year] ?? 0);
            }
        });
    }, [year]);

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-sm text-muted-foreground">
                    {total} contributions in{" "}
                    {year === "last" ? "the last year" : year}
                </h2>

                <YearSelect value={year} onChange={setYear} />
            </div>

            <div className="w-full overflow-x-auto">
                <ContributionGraph data={data}>
                    <ContributionGraphCalendar>
                        {({ activity, dayIndex, weekIndex }) => (
                            <ContributionGraphBlock
                                activity={activity}
                                dayIndex={dayIndex}
                                weekIndex={weekIndex}
                                className={`
                  data-[level="0"]:fill-[#161b22]
                  data-[level="1"]:fill-[#0e4429]
                  data-[level="2"]:fill-[#006d32]
                  data-[level="3"]:fill-[#26a641]
                  data-[level="4"]:fill-[#39d353]
                `}
                            />
                        )}
                    </ContributionGraphCalendar>

                    <ContributionGraphFooter>
                        <ContributionGraphTotalCount />
                        <ContributionGraphLegend />
                    </ContributionGraphFooter>
                </ContributionGraph>
            </div>
        </div>
    );
}

export function YearSelect({ value, onChange }: YearSelectProps) {
    return (
        <Select
            value={value.toString()}
            onValueChange={(v) =>
                onChange(v === "last" ? "last" : Number(v))
            }
        >
            <SelectTrigger className="w-35">
                <SelectValue />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="last">Last year</SelectItem>
                {years.map((y) => (
                    <SelectItem key={y} value={y.toString()}>
                        {y}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}