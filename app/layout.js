import Header from './components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        {children}
      </body>
    </html>
  )
}
