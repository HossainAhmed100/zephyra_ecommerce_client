import { Outlet } from "react-router-dom"
import Footer from "../Pages/Shared/Footer/Footer"
import NavBar from "../Pages/Shared/NavBar/NavBar"


function MainLayout({children}) {
  return (
    <>
    <NavBar />
    <Outlet>{children}</Outlet>
    <Footer />
    </>
  )
}

export default MainLayout
