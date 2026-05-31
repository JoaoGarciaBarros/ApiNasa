import Navbar from './Navbar'
import StarsBackground from '../ui/StarsBackground'

export default function Layout({ children }) {
  return (
    <>
      <StarsBackground />
      <div className="relative z-10 min-h-screen text-white">
        <Navbar />
        <main className="pt-16">{children}</main>
      </div>
    </>
  )
}
