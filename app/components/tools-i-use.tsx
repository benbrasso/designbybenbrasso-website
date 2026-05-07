"use client"

import {
  PaletteIcon,
  TriangleIcon,
  GithubIcon,
  CodeIcon,
  WindIcon,
  ClipboardCheckIcon,
  BrainCircuitIcon,
  SparklesIcon,
  CodepenIcon,
  LibraryIcon,
  LayoutDashboardIcon,
  BarChart3Icon,
  LineChartIcon,
  ActivityIcon,
  UsersIcon,
  RefreshCwIcon,
  LightbulbIcon,
  SearchIcon,
  SmileIcon,
  WorkflowIcon,
  Wand2Icon,
  MessageCircleIcon,
  FileCodeIcon,
  MicIcon,
  NotebookPenIcon,
  DatabaseIcon,
  HeartIcon,
} from "lucide-react"
import type React from "react"
import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Switch } from "@/components/ui/switch"

interface ToolItem {
  icon: React.ElementType
  text: string
}

function ToolItemComponent({
  item,
  index,
  animationsEnabled,
}: {
  item: ToolItem
  index: number
  animationsEnabled: boolean
}) {
  const controls = useAnimation()
  const [isActive, setIsActive] = useState(false)
  const IconComponent = item.icon

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      ...(animationsEnabled
        ? { x: [0, -5, 5, -4, 4, 0], rotate: [0, -3, 3, -2, 2, 0] }
        : {}),
      transition: {
        delay: index * 0.03,
        duration: 0.45,
        ease: "easeOut",
      },
    },
  }

  const triggerWiggle = () => {
    if (!animationsEnabled) return
    controls.start({
      x: [0, -5, 5, -4, 4, 0],
      rotate: [0, -3, 3, -2, 2, 0],
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    })
  }

  return (
    <motion.div
      className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-lg font-semibold shadow-sm cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950 transition-colors ${
        isActive
          ? "bg-sky-100 text-sky-900 dark:bg-sky-900/30 dark:text-sky-100"
          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
      }`}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      animate={controls}
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={() => {
        setIsActive(true)
        triggerWiggle()
      }}
      onHoverEnd={() => setIsActive(false)}
      onFocus={() => {
        setIsActive(true)
        triggerWiggle()
      }}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
      role="listitem"
      aria-label={item.text}
    >
      <IconComponent className="h-5 w-5 text-sky-700 dark:text-sky-600 flex-shrink-0" aria-hidden="true" />
      <span>{item.text}</span>
    </motion.div>
  )
}

export default function ToolsIUseSection() {
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return true
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  })

  const tools: ToolItem[] = [
    { icon: PaletteIcon, text: "Figma" },
    { icon: PaletteIcon, text: "FigJam" },
    { icon: TriangleIcon, text: "Vercel" },
    { icon: GithubIcon, text: "GitHub" },
    { icon: CodeIcon, text: "VS Code" },
    { icon: WindIcon, text: "Tailwind CSS" },
    { icon: GithubIcon, text: "GitHub Copilot" },
    { icon: Wand2Icon, text: "v0 by Vercel" },
    { icon: BrainCircuitIcon, text: "ChatGPT" },
    { icon: MessageCircleIcon, text: "Claude.ai" },
    { icon: FileCodeIcon, text: "Claude Code" },
    { icon: HeartIcon, text: "Lovable" },
    { icon: SparklesIcon, text: "Google Gemini" },
    { icon: ClipboardCheckIcon, text: "Optimal Workshop" },
    { icon: CodepenIcon, text: "CodePen" },
    { icon: WorkflowIcon, text: "Mermaid" },
    { icon: LibraryIcon, text: "U.S. Web Design System" },
    { icon: LayoutDashboardIcon, text: "Mural" },
    { icon: BarChart3Icon, text: "Looker Studio" },
    { icon: LineChartIcon, text: "Google Analytics 4" },
    { icon: ActivityIcon, text: "Datadog" },
    { icon: NotebookPenIcon, text: "Granola.ai" },
    { icon: DatabaseIcon, text: "Airtable" },
    { icon: DatabaseIcon, text: "Make (Celonis)" },
    { icon: UsersIcon, text: "Human-centered design" },
    { icon: RefreshCwIcon, text: "Agile delivery" },
    { icon: MicIcon, text: "Web Content Accessibility Guidelines (WCAG)" },
    { icon: LightbulbIcon, text: "An open mind" },
    { icon: SearchIcon, text: "Curiosity" },
    { icon: SmileIcon, text: "An abundance mindset" },
    { icon: LightbulbIcon, text: "Optimism" },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100">
            Tools I use to <span className="text-sky-600 dark:text-sky-500">design</span>
          </h2>
          <label className="flex items-center justify-center gap-3 mt-6 cursor-pointer select-none">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {animationsEnabled ? "Animations on" : "Animations off"}
            </span>
            <Switch
              checked={animationsEnabled}
              onCheckedChange={setAnimationsEnabled}
            />
          </label>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {tools.map((item, index) => (
            <ToolItemComponent key={index} item={item} index={index} animationsEnabled={animationsEnabled} />
          ))}
        </div>
      </div>
    </section>
  )
}
