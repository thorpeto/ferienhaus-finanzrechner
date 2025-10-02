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
      <head>
        {/* Google AdSense Script */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2826152307009467"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
