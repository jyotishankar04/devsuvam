import {
    eachDayOfInterval,
    subYears,
    formatISO,
    startOfYear,
    endOfYear,
} from "date-fns";
import { getCache, setCache } from "./cache";

export type Contribution = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};

type GitHubResponse = {
    total: Record<string, number>;
    contributions: Contribution[];
};

const USERNAME = "jyotishankar04";

export async function fetchGitHubContributions(
    year: number | "last"
): Promise<GitHubResponse> {
    const cacheKey = `github_contributions:${USERNAME}:${year}`;

    const cached = getCache<GitHubResponse>(cacheKey);
    if (cached) return cached;

    const url = new URL(
        `https://github-contributions-api.jogruber.de/v4/${USERNAME}`
    );

    url.searchParams.set("y", year.toString());

    const res = await fetch(url.toString());
    if (!res.ok) {
        throw new Error("Failed to fetch GitHub contributions");
    }

    const data = (await res.json()) as GitHubResponse;

    setCache(cacheKey, data);
    return data;
}


export function normalizeLastYear(contributions: Contribution[]) {
    const end = new Date();
    const start = subYears(end, 1);

    const map = new Map(contributions.map((c) => [c.date, c]));

    return eachDayOfInterval({ start, end }).map((day) => {
        const date = formatISO(day, { representation: "date" });
        return map.get(date) ?? { date, count: 0, level: 0 };
    });
}

export function normalizeYear(
    contributions: Contribution[],
    year: number
) {
    const map = new Map(contributions.map((c) => [c.date, c]));

    return eachDayOfInterval({
        start: startOfYear(new Date(year, 0, 1)),
        end: endOfYear(new Date(year, 0, 1)),
    }).map((day) => {
        const date = formatISO(day, { representation: "date" });
        return map.get(date) ?? { date, count: 0, level: 0 };
    });
}