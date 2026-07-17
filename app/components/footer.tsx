import Link from "next/link"
import Image from "next/image"
import { CompassIcon, LinkedinIcon, GithubIcon } from "lucide-react"
import { ThemeToggle } from "@/app/components/theme-toggle"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full border-t border-sky-600/30 dark:border-sky-500/30 bg-white dark:bg-neutral-950">
      <div className="w-full mx-auto px-6 py-8">
        {/* Top row for logo and social icons */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="flex items-center gap-2 group/logo">
            <CompassIcon className="h-6 w-6 text-sky-700 dark:text-sky-400 group-hover/logo:opacity-80 transition-opacity" />
            <p className="text-sm font-medium group-hover/logo:text-sky-700 dark:group-hover/logo:text-sky-400 transition-colors">
              designbybenbrasso
            </p>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/benbrasso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ben Brasso's GitHub Profile"
              className="rounded-full bg-neutral-800 dark:bg-neutral-900 p-2 group transition-colors hover:bg-neutral-700"
            >
              <GithubIcon className="h-5 w-5 text-neutral-100 group-hover:text-sky-500 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/benbrasso/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ben Brasso's LinkedIn Profile"
              className="rounded-full bg-neutral-800 dark:bg-neutral-900 p-2 group transition-colors hover:bg-neutral-700"
            >
              <LinkedinIcon className="h-5 w-5 text-neutral-100 group-hover:text-sky-500 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Bottom row for text content, aligned on the same y-axis */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-sm">
          <div className="text-neutral-500 dark:text-neutral-400 text-center md:text-left">
            Built using v0 for rapid prototyping, extended with
            <br />
            custom components and image generation.
            <br />
            <Link
              href="https://github.com/benbrasso/designbybenbrasso-website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors underline"
              aria-label="Repository for designbybenbrasso website on GitHub"
            >
              Check out the code on GitHub
            </Link>
            .
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 md:max-w-xs">
            <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-2 md:justify-end">
              <div className="text-center md:text-right md:flex-shrink">
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Professional Member, issued by</p>
                <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap">
                  International Association of Accessibility Professionals (IAAP)
                </p>
              </div>
              <div className="md:flex-shrink-0">
                <Image
                  src="/images/design-mode/professional-member_1_pvqxst.png"
                  alt="International Association of Accessibility Professionals (IAAP) Professional Member Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <ThemeToggle />
            <p className="text-muted-foreground text-center md:text-right">
              &copy; {currentYear} Ben Brasso. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-200 dark:bg-neutral-800 py-6">
        <p className="text-xs text-neutral-700 dark:text-neutral-300 text-center">
          benbrasso.com &mdash; not affiliated with any federal agency
        </p>
      </div>
    </footer>
  )
}
