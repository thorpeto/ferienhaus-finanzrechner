import './globals.css'
import { Inter } from 'next/font/google'
import CookieConsent from './components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ferienhaus Vollrechner',
  description: 'Finanzrechner für Ferienhaus-Investitionen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
