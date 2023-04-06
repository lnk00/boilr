import { inter } from './fonts';
import './normalize.css';
import './globals.css';

export const metadata = {
  title: 'Boilr',
  description: 'The best boilrplate for your next SaaS idea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  )
}
