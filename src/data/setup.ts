import type { IconType } from "react-icons"
import { GenIcon } from "react-icons/lib"
import {
  LuGitBranch,
  LuKeyboard,
  LuMonitor,
  LuMouse,
  LuMousePointer2,
  LuTerminal,
} from "react-icons/lu"
import {
  SiBeekeeperstudio,
  SiBoat,
  SiBrave,
  SiBruno,
  SiClaude,
  SiDiscord,
  SiDocker,
  SiGithub,
  SiGooglechrome,
  SiLenovo,
  SiNeovim,
  SiNotion,
  SiObsidian,
  SiObsstudio,
  SiOneplus,
  SiOpenai,
  SiPnpm,
  SiSpotify,
  SiTmux,
} from "react-icons/si"
import {
  TbDeviceDesktop,
  TbDeviceIpad,
} from "react-icons/tb"
import {
  VscVscode,
} from "react-icons/vsc"

/** Nothing's dot-matrix "N" — not in react-icons, so drawn here. */
const NOTHING_DOTS = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 1], [2, 2], [3, 3],
  [4, 0], [4, 1], [4, 2], [4, 3], [4, 4],
]
const NothingIcon: IconType = GenIcon({
  tag: "svg",
  attr: { viewBox: "0 0 24 24", fill: "currentColor" },
  child: NOTHING_DOTS.map(([col, row]) => ({
    tag: "circle",
    attr: { cx: String(4 + col * 4), cy: String(4 + row * 4), r: "1.6" },
    child: [],
  })),
})

/**
 * The /setup page — gear, apps and tools, and what each one is for.
 * Mark the things you reach for every day with `daily: true`.
 */
export type SetupItem = {
  name: string
  /** What you use it for. */
  description: string
  url?: string
  icon?: IconType
  /** Brand colour for the icon; leave unset for monochrome logos. */
  color?: string
  daily?: boolean
  /** Small spec chips shown under the description (hardware). */
  specs?: string[]
  /** Short label shown next to the name, e.g. "Primary" or "Secondary". */
  badge?: string
}

export type SetupCategory = {
  title: string
  description?: string
  items: SetupItem[]
}

/** The primary laptop, shown at the top of the page with a full spec sheet. */
export const DAILY_DRIVER = {
  role: "Primary laptop",
  name: "HP EliteBook 6 G1a",
  subtitle: "14-inch · Next Gen AI PC",
  specs: [
    { label: "Processor", value: "AMD Ryzen AI 7 350" },
    { label: "Graphics", value: "AMD Radeon 860M" },
    { label: "Memory", value: "32 GB" },
    { label: "Storage", value: "512 GB NVMe SSD" },
    { label: "OS", value: "Omarchy (Arch Linux)" },
    { label: "Desktop", value: "Hyprland · Wayland" },
  ],
}

export const SETUP: SetupCategory[] = [
  {
    title: "Devices",
    description: "Everything else I carry or keep on the desk.",
    items: [
      {
        name: "Lenovo IdeaPad Gaming 3",
        badge: "Secondary",
        description: "Backup machine for side work, and the occasional game.",
        icon: SiLenovo,
        color: "#E2231A",
        specs: ["Intel Core i5", "16 GB RAM"],
      },
      {
        name: "iPad (11th generation)",
        description: "Reading docs and articles, sketching system designs, and notes.",
        icon: TbDeviceIpad,
        specs: ["11-inch", "iPadOS"],
      },
      {
        name: "CMF Phone 2 Pro",
        description: "Daily phone — checking mobile layouts, 2FA, and staying reachable.",
        icon: NothingIcon,
        specs: ["by Nothing", "Nothing OS"],
        daily: true,
      },
    ],
  },
  {
    title: "Audio",
    description: "Music, calls and focus.",
    items: [
      {
        name: "OnePlus Buds Pro 2",
        badge: "Primary",
        description: "Calls, commutes and deep-focus sessions with noise cancelling.",
        icon: SiOneplus,
        color: "#F5010C",
        specs: ["Wireless earbuds", "ANC"],
        daily: true,
      },
      {
        name: "CMF Buds",
        description: "Second pair — music on the go.",
        icon: NothingIcon,
        specs: ["Wireless earbuds", "by Nothing"],
      },
      {
        name: "boAt Rockerz",
        description: "Long listening sessions at the desk.",
        icon: SiBoat,
        color: "#E20722",
        specs: ["Wireless headphones"],
      },
    ],
  },
  {
    title: "Desk",
    description: "Where the long sessions happen.",
    items: [
      {
        name: "Samsung Monitor",
        description: "External display — code on one screen, browser and docs on the other.",
        icon: LuMonitor,
        daily: true,
      },
      {
        name: "Zebronics Monitor Arm",
        description: "Keeps the monitor at eye level and frees up desk space.",
        icon: TbDeviceDesktop,
      },
      {
        name: "Zebion Mechanical Keyboard",
        description: "Main keyboard at the desk — mechanical switches for long typing sessions.",
        icon: LuKeyboard,
        daily: true,
      },
      {
        name: "Portronics Mouse",
        description: "Everyday mouse.",
        icon: LuMouse,
        daily: true,
      },
    ],
  },
  {
    title: "Editor & Terminal",
    description: "Where the code gets written.",
    items: [
      {
        name: "Cursor",
        description: "Main editor for day-to-day work, with AI-assisted edits and codebase chat.",
        url: "https://cursor.com",
        icon: LuMousePointer2,
        daily: true,
      },
      {
        name: "VS Code",
        description: "Extension-heavy projects and debugging.",
        url: "https://code.visualstudio.com",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "Neovim",
        description: "Quick edits without leaving the terminal.",
        url: "https://neovim.io",
        icon: SiNeovim,
        color: "#57A143",
      },
      {
        name: "Ghostty",
        description: "GPU-accelerated terminal.",
        url: "https://ghostty.org",
        icon: LuTerminal,
        daily: true,
      },
      {
        name: "tmux",
        description: "Terminal sessions, splits and keeping servers running.",
        url: "https://github.com/tmux/tmux",
        icon: SiTmux,
        color: "#1BB91F",
      },
    ],
  },
  {
    title: "AI",
    description: "Research, pair-programming and second opinions.",
    items: [
      {
        name: "Claude",
        badge: "Primary",
        description: "My main AI — research, thinking through designs, writing and explaining code.",
        url: "https://claude.ai",
        icon: SiClaude,
        color: "#D97757",
        daily: true,
      },
      {
        name: "Claude Code",
        description: "Claude as a coding agent in the terminal — refactors, reviews and debugging.",
        url: "https://claude.com/claude-code",
        icon: SiClaude,
        color: "#D97757",
        daily: true,
      },
      {
        name: "Codex",
        description: "OpenAI's coding agent — a second opinion on tricky changes.",
        url: "https://openai.com/codex",
        icon: SiOpenai,
      },
    ],
  },
  {
    title: "Development",
    description: "Building, testing and shipping backends.",
    items: [
      {
        name: "Docker",
        description: "Local Postgres/Redis and containerised services.",
        url: "https://www.docker.com",
        icon: SiDocker,
        color: "#2496ED",
        daily: true,
      },
      {
        name: "lazygit",
        description: "Fast staging, rebasing and history in the terminal.",
        url: "https://github.com/jesseduffield/lazygit",
        icon: LuGitBranch,
        color: "#F05032",
      },
      {
        name: "GitHub CLI",
        description: "PRs, issues and repos without leaving the terminal.",
        url: "https://cli.github.com",
        icon: SiGithub,
      },
      {
        name: "Bruno",
        description: "Git-friendly API client — request collections live alongside the code.",
        url: "https://www.usebruno.com",
        icon: SiBruno,
        color: "#F4AA41",
      },
      {
        name: "Beekeeper Studio",
        description: "Database client for browsing tables and running SQL queries.",
        url: "https://www.beekeeperstudio.io",
        icon: SiBeekeeperstudio,
        color: "#FAD83B",
      },
      {
        name: "Node.js · pnpm",
        description: "Runtime and package manager for most projects.",
        url: "https://pnpm.io",
        icon: SiPnpm,
        color: "#F69220",
        daily: true,
      },
    ],
  },
  {
    title: "Browsers",
    items: [
      {
        name: "Google Chrome",
        description: "Development and DevTools.",
        url: "https://www.google.com/chrome",
        icon: SiGooglechrome,
        color: "#4285F4",
        daily: true,
      },
      {
        name: "Brave",
        description: "Personal browsing with built-in ad blocking.",
        url: "https://brave.com",
        icon: SiBrave,
        color: "#FB542B",
      },
    ],
  },
  {
    title: "Productivity & Media",
    items: [
      {
        name: "Notion",
        description: "Planning, task lists and project docs.",
        url: "https://www.notion.so",
        icon: SiNotion,
      },
      {
        name: "Obsidian",
        description: "Notes, learning logs and drafts for blog posts.",
        url: "https://obsidian.md",
        icon: SiObsidian,
        color: "#7C3AED",
      },
      {
        name: "Spotify",
        description: "Music while coding.",
        url: "https://open.spotify.com",
        icon: SiSpotify,
        color: "#1DB954",
      },
      {
        name: "Discord",
        description: "Developer communities.",
        url: "https://discord.com",
        icon: SiDiscord,
        color: "#5865F2",
      },
      {
        name: "OBS Studio",
        description: "Screen recording for demos.",
        url: "https://obsproject.com",
        icon: SiObsstudio,
      },
    ],
  },
]
