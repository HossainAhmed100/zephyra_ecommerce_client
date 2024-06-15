import { Outlet } from "react-router-dom"
import Footer from "../Pages/Shared/Footer/Footer"
import NavBar from "../Pages/Shared/NavBar/NavBar"


function MainLayout({children}) {
  return (
    <div className="bg-gray-50">
    <NavBar />
    <Outlet>{children}</Outlet>
    <Footer />
    </div>
  )
}

export default MainLayout
