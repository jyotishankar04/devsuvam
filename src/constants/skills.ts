export interface Skill {
    name: string
    icon: string
    color: string
    category: string
    proficiency?: "Beginner" | "Intermediate" | "Advanced" | "Expert"
    yearsOfExperience?: number
}

export interface SkillCategory {
    name: string
    skills: Skill[]
    color: string
    icon: string
}

export const skillsData: SkillCategory[] = [
    {
        name: "Programming Languages",
        color: "text-blue-600",
        icon: "💻",
        skills: [
            { name: "JavaScript (ES6+)", icon: "⚡", color: "text-yellow-500", category: "Languages", proficiency: "Expert", yearsOfExperience: 3 },
            { name: "TypeScript", icon: "📘", color: "text-blue-600", category: "Languages", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "Python", icon: "🐍", color: "text-yellow-600", category: "Languages", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "SQL", icon: "🗄️", color: "text-orange-600", category: "Languages", proficiency: "Advanced", yearsOfExperience: 2 },
        ],
    },
    {
        name: "Frontend Development",
        color: "text-cyan-600",
        icon: "🎨",
        skills: [
            { name: "React.js (incl. React 19)", icon: "⚛️", color: "text-blue-500", category: "Frontend", proficiency: "Expert", yearsOfExperience: 3 },
            { name: "Next.js", icon: "▲", color: "text-gray-900", category: "Frontend", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "Tailwind CSS", icon: "💨", color: "text-cyan-500", category: "Frontend", proficiency: "Expert", yearsOfExperience: 2 },
            { name: "Shadcn UI", icon: "🎭", color: "text-gray-800", category: "Frontend", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "Redux", icon: "🔄", color: "text-purple-600", category: "Frontend", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "TanStack Query", icon: "📊", color: "text-orange-500", category: "Frontend", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "Vite", icon: "⚡", color: "text-purple-500", category: "Frontend", proficiency: "Advanced", yearsOfExperience: 1 },
        ],
    },
    {
        name: "Backend Development",
        color: "text-green-600",
        icon: "⚙️",
        skills: [
            { name: "Node.js", icon: "🟢", color: "text-green-600", category: "Backend", proficiency: "Expert", yearsOfExperience: 3 },
            { name: "Express.js", icon: "🚂", color: "text-gray-700", category: "Backend", proficiency: "Expert", yearsOfExperience: 3 },
            { name: "FastAPI", icon: "⚡", color: "text-teal-500", category: "Backend", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "REST APIs", icon: "🔗", color: "text-blue-500", category: "Backend", proficiency: "Expert", yearsOfExperience: 3 },
            { name: "Socket.io", icon: "🔌", color: "text-gray-800", category: "Backend", proficiency: "Advanced", yearsOfExperience: 1 },
        ],
    },
    {
        name: "Databases & ORMs",
        color: "text-purple-600",
        icon: "🗄️",
        skills: [
            { name: "PostgreSQL", icon: "🐘", color: "text-blue-700", category: "Database", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "MongoDB", icon: "🍃", color: "text-green-600", category: "Database", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "Redis", icon: "🔴", color: "text-red-600", category: "Database", proficiency: "Intermediate", yearsOfExperience: 1 },
            { name: "Prisma ORM", icon: "🔺", color: "text-gray-800", category: "Database", proficiency: "Advanced", yearsOfExperience: 2 },
        ],
    },
    {
        name: "DevOps & Cloud",
        color: "text-orange-600",
        icon: "☁️",
        skills: [
            { name: "Docker", icon: "🐳", color: "text-blue-500", category: "DevOps", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "AWS", icon: "☁️", color: "text-orange-500", category: "DevOps", proficiency: "Intermediate", yearsOfExperience: 1 },
            { name: "Nginx", icon: "🌐", color: "text-green-600", category: "DevOps", proficiency: "Intermediate", yearsOfExperience: 1 },
            { name: "Git", icon: "📝", color: "text-orange-600", category: "DevOps", proficiency: "Expert", yearsOfExperience: 3 },
            { name: "GitHub", icon: "🐙", color: "text-gray-800", category: "DevOps", proficiency: "Expert", yearsOfExperience: 3 },
            { name: "Linux", icon: "🐧", color: "text-gray-800", category: "DevOps", proficiency: "Advanced", yearsOfExperience: 2 },
        ],
    },
    {
        name: "AI & Machine Learning",
        color: "text-purple-600",
        icon: "🤖",
        skills: [
            { name: "LangChain", icon: "🔗", color: "text-blue-600", category: "AI/ML", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "Pinecone", icon: "🌲", color: "text-green-500", category: "AI/ML", proficiency: "Intermediate", yearsOfExperience: 1 },
            { name: "Gemini API", icon: "💎", color: "text-blue-500", category: "AI/ML", proficiency: "Intermediate", yearsOfExperience: 1 },
        ],
    },
    {
        name: "Testing & Quality",
        color: "text-red-600",
        icon: "🧪",
        skills: [
            { name: "Jest", icon: "🃏", color: "text-red-600", category: "Testing", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "Unit Testing", icon: "🔬", color: "text-blue-500", category: "Testing", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "Integration Testing", icon: "🔗", color: "text-green-500", category: "Testing", proficiency: "Advanced", yearsOfExperience: 1 },
        ],
    },
    {
        name: "Integrations & Payments",
        color: "text-green-600",
        icon: "💳",
        skills: [
            { name: "PhonePe Gateway", icon: "💳", color: "text-purple-600", category: "Payment", proficiency: "Intermediate", yearsOfExperience: 1 },
            { name: "Cloudinary", icon: "☁️", color: "text-blue-500", category: "Integration", proficiency: "Intermediate", yearsOfExperience: 1 },
            { name: "JWT Authentication", icon: "🔐", color: "text-orange-500", category: "Security", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "Social Login", icon: "👥", color: "text-blue-600", category: "Authentication", proficiency: "Advanced", yearsOfExperience: 1 },
        ],
    },
    {
        name: "Performance & Optimization",
        color: "text-yellow-600",
        icon: "⚡",
        skills: [
            { name: "Query Optimization", icon: "🔍", color: "text-blue-500", category: "Performance", proficiency: "Advanced", yearsOfExperience: 2 },
            { name: "Redis Caching", icon: "🔴", color: "text-red-600", category: "Performance", proficiency: "Intermediate", yearsOfExperience: 1 },
            { name: "Image Optimization", icon: "🖼️", color: "text-green-500", category: "Performance", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "Lazy Loading", icon: "⏳", color: "text-purple-500", category: "Performance", proficiency: "Advanced", yearsOfExperience: 1 },
            { name: "API Optimization", icon: "⚡", color: "text-orange-500", category: "Performance", proficiency: "Advanced", yearsOfExperience: 2 },
        ],
    },
]

// Flatten all skills for easy access
export const allSkills: Skill[] = skillsData.flatMap((category) => category.skills)

// Get skills by category
export const getSkillsByCategory = (categoryName: string): Skill[] => {
    const category = skillsData.find((cat) => cat.name === categoryName)
    return category ? category.skills : []
}

// Get skills by proficiency level
export const getSkillsByProficiency = (level: string): Skill[] => {
    return allSkills.filter((skill) => skill.proficiency === level)
}

// Get most experienced skills
export const getMostExperiencedSkills = (count = 10): Skill[] => {
    return [...allSkills].sort((a, b) => (b.yearsOfExperience || 0) - (a.yearsOfExperience || 0)).slice(0, count)
}

// Get skills statistics
export const getSkillsStats = () => {
    const totalSkills = allSkills.length
    const expertSkills = allSkills.filter((skill) => skill.proficiency === "Expert").length
    const advancedSkills = allSkills.filter((skill) => skill.proficiency === "Advanced").length
    const categories = skillsData.length

    return {
        totalSkills,
        expertSkills,
        advancedSkills,
        categories,
    }
}
