import type { IconType } from "react-icons"
import {
  LuActivity,
  LuGitBranch,
  LuHeadphones,
  LuKeyboard,
  LuMonitor,
  LuMouse,
  LuMousePointer2,
  LuShare2,
  LuSmartphone,
  LuSquareTerminal,
  LuTerminal,
} from "react-icons/lu"
import {
  SiArchlinux,
  SiBeekeeperstudio,
  SiBrave,
  SiBruno,
  SiBun,
  SiClaude,
  SiDiscord,
  SiDocker,
  SiGithub,
  SiGooglechrome,
  SiLenovo,
  SiMpv,
  SiNeovim,
  SiNotion,
  SiObsidian,
  SiObsstudio,
  SiOneplus,
  SiOpenai,
  SiPnpm,
  SiPostman,
  SiSpotify,
  SiTmux,
  SiWayland,
  SiWhatsapp,
  SiZedindustries,
} from "react-icons/si"
import { TbDeviceAirpods, TbDeviceDesktop, TbDeviceIpad } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"

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
        icon: LuSmartphone,
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
        specs: ["Wireless earbuds", "ANC"],
        daily: true,
      },
      {
        name: "CMF Buds",
        description: "Second pair — music on the go.",
        icon: TbDeviceAirpods,
        specs: ["Wireless earbuds", "by Nothing"],
      },
      {
        name: "boAt Rockerz",
        description: "Long listening sessions at the desk.",
        icon: LuHeadphones,
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
      },
      {
        name: "Zed",
        description: "Fast, lightweight editor for quick sessions.",
        url: "https://zed.dev",
        icon: SiZedindustries,
      },
      {
        name: "Neovim",
        description: "Quick edits without leaving the terminal.",
        url: "https://neovim.io",
        icon: SiNeovim,
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
        daily: true,
      },
      {
        name: "Claude Code",
        description: "Claude as a coding agent in the terminal — refactors, reviews and debugging.",
        url: "https://claude.com/claude-code",
        icon: SiClaude,
        daily: true,
      },
      {
        name: "Codex",
        description: "OpenAI's coding agent — a second opinion on tricky changes.",
        url: "https://openai.com/codex",
        icon: SiOpenai,
      },
      {
        name: "OpenCode",
        description: "Open-source terminal coding agent for trying different models.",
        url: "https://opencode.ai",
        icon: LuSquareTerminal,
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
        daily: true,
      },
      {
        name: "lazydocker",
        description: "Terminal UI for containers, logs and stats.",
        url: "https://github.com/jesseduffield/lazydocker",
        icon: SiDocker,
      },
      {
        name: "lazygit",
        description: "Fast staging, rebasing and history in the terminal.",
        url: "https://github.com/jesseduffield/lazygit",
        icon: LuGitBranch,
      },
      {
        name: "GitHub CLI",
        description: "PRs, issues and repos without leaving the terminal.",
        url: "https://cli.github.com",
        icon: SiGithub,
      },
      {
        name: "Postman",
        description: "Designing and testing REST APIs.",
        url: "https://www.postman.com",
        icon: SiPostman,
      },
      {
        name: "Bruno",
        description: "Git-friendly API client — request collections live alongside the code.",
        url: "https://www.usebruno.com",
        icon: SiBruno,
      },
      {
        name: "Beekeeper Studio",
        description: "Database client for browsing tables and running SQL queries.",
        url: "https://www.beekeeperstudio.io",
        icon: SiBeekeeperstudio,
      },
      {
        name: "Node.js · pnpm",
        description: "Runtime and package manager for most projects.",
        url: "https://pnpm.io",
        icon: SiPnpm,
        daily: true,
      },
      {
        name: "Bun",
        description: "Scripts and quick experiments.",
        url: "https://bun.sh",
        icon: SiBun,
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
        daily: true,
      },
      {
        name: "Brave",
        description: "Personal browsing with built-in ad blocking.",
        url: "https://brave.com",
        icon: SiBrave,
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
      },
      {
        name: "Spotify",
        description: "Music while coding.",
        url: "https://open.spotify.com",
        icon: SiSpotify,
      },
      {
        name: "Discord",
        description: "Developer communities.",
        url: "https://discord.com",
        icon: SiDiscord,
      },
      {
        name: "WhatsApp",
        description: "Staying in touch.",
        url: "https://www.whatsapp.com",
        icon: SiWhatsapp,
      },
      {
        name: "LocalSend",
        description: "Moving files between phone and laptop over Wi-Fi.",
        url: "https://localsend.org",
        icon: LuShare2,
      },
      {
        name: "OBS Studio",
        description: "Screen recording for demos.",
        url: "https://obsproject.com",
        icon: SiObsstudio,
      },
      {
        name: "mpv",
        description: "Video playback.",
        url: "https://mpv.io",
        icon: SiMpv,
      },
    ],
  },
  {
    title: "System",
    description: "The desktop everything above runs on.",
    items: [
      {
        name: "Omarchy",
        description: "Opinionated Arch Linux setup — the base of the whole machine.",
        url: "https://omarchy.org",
        icon: SiArchlinux,
        daily: true,
      },
      {
        name: "Hyprland",
        description: "Tiling Wayland compositor, keyboard-driven windows.",
        url: "https://hypr.land",
        icon: SiWayland,
      },
      {
        name: "btop",
        description: "Keeping an eye on CPU, memory and processes.",
        url: "https://github.com/aristocratos/btop",
        icon: LuActivity,
      },
    ],
  },
]
