'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'

export default function Navigation() {
  const pathname = usePathname()
  const { dark, toggle } = useTheme()

  const links = [
    { href: '/', label: 'Start' },
    { href: '/progress', label: 'Fortschritt' },
    { href: '/exam', label: 'Prüfung' },
    { href: '/review', label: 'Wiederholen' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-indigo-600 dark:text-indigo-400">
          BioLearn
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-2 py-1 text-sm rounded-lg transition-colors ${
                pathname === l.href
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="ml-2 p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Dark Mode umschalten"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
