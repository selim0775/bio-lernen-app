import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'BioLearn – Zellbiologie & Biochemie',
  description: 'Lern-App für Glykolyse, Oxidative Decarboxylierung, Citratzyklus und Atmungskette',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('bio-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t?t==='dark':d){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navigation />
          <main className="max-w-5xl mx-auto px-4 py-6 sm:py-10 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
