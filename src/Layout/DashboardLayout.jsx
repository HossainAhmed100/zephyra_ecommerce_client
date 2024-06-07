import { Avatar, DropdownMenu, DropdownItem, DropdownTrigger, Dropdown} from "@nextui-org/react";
import { Link, useNavigate, Outlet, NavLink } from "react-router-dom";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { VscSignOut } from "react-icons/vsc";
import Swal from "sweetalert2";
import auth from "../firebase/firebase.config";
import ThreeLineIcon from "../assets/SVGIcons/ThreeLineIcon";
import { useState } from "react";


function DashboardLayout() {
    // State to track the open/close status of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log("🚀 ~ DashboardLayout ~ isMenuOpen:", isMenuOpen)
    // Get the current authenticated user
    const [user] = useAuthState(auth);
    // Hook for navigation
    const navigate = useNavigate();
    // Hook to sign out user
    const [signOut] = useSignOut(auth);
  
    // Function to handle user logout
    const handleLogOut = async () => {
    const success = await signOut();
      if (success) {
      navigate("/login")
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logout Successfull",
        showConfirmButton: false,
        timer: 1500
      });
    }};
  return (
    <div>
      <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                  <ThreeLineIcon />
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Zephyra</span>
              </a>
            </div>
            <div className="flex items-center">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar isBordered as="button" className="transition-transform" color="default" 
                  name={user?.displayName} size="sm"
                  src={user?.photoURL}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem textValue="userNameandEmail" key="userDetails" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>
                <DropdownItem textValue="profile" key="profile">
                  <Link className="inline-block w-full" to="/dashboard/myProfile">Profile</Link>
                </DropdownItem>
                <DropdownItem textValue="dashboard" key="dashboard">
                  <Link className="inline-block w-full" to="/dashboard">Dashboard</Link>
                </DropdownItem>
                <DropdownItem textValue="logout" onClick={handleLogOut} key="logout" color="danger" className="flex items-center justify-center flex-row gap-2">
                  <span className="flex items-center gap-1 justify-start">
                  <VscSignOut />
                  Log Out
                  </span>
                </DropdownItem>
              </DropdownMenu>
              </Dropdown>  
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${!isMenuOpen && "-translate-x-full"} sm:translate-x-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li><CustomNavLink title={"Dashboard"} path={"/dashboard"}/></li>
              <li><CustomNavLink title={"Manage Product"} path={"manageProduct"}/></li>
              <li><CustomNavLink title={"Add new Product"} path={"addNewProduct"}/></li>
              <li><CustomNavLink title={"My Profile"} path={"myProfile"}/></li>
            </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <Outlet></Outlet>
        </div>
      </div>
      </div>
    </div>
  )
}

const CustomNavLink = ({path, title}) => {
  return(
    <NavLink
      to={path}
      className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group">
      <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 active:bg-red-500 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
    </svg>
    <span className="flex-1 ms-3 whitespace-nowrap">{title}</span>
    </NavLink>
  )
}

export default DashboardLayout
