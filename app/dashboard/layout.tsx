
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/Dashboard/Footer"
import Menu from "@/components/Dashboard/Menu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-full bg-slate-50">
      <Navbar/>
        <div className="flex">
          <div className="menuContainer w-[15%] sm:w-[200px] px-2 py-2 border-r-2 border-blue-100">
            <Menu/>
          </div>
          <div className="contentContainer px-2 py-0 w-[85%] overflow-x-scroll overflow-y-hidden sm:overflow-hidden">
            {children}
          </div>
        </div>
      <Footer/>
    </div>
  )
}
