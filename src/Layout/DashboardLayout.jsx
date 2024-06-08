import { Avatar, DropdownMenu, DropdownItem, DropdownTrigger, Dropdown} from "@nextui-org/react";
import { Link, useNavigate, Outlet, NavLink } from "react-router-dom";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { VscSignOut } from "react-icons/vsc";
import Swal from "sweetalert2";
import auth from "../firebase/firebase.config";
import ThreeLineIcon from "../assets/SVGIcons/ThreeLineIcon";
import { useState } from "react";
import { FaChartPie } from "react-icons/fa6";

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
              <Link to="/" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Zephyra</span>
              </Link>
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
              <li>
              <NavLink
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group" end>
                {({ isActive }) => (
                  <>
                  <FaChartPie color={isActive ? "#000000" : "#6b7280"} size={22}/>
                  <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to="manageProduct"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group" end>
                {({ isActive }) => (
                  <>
                  <FaChartPie color={isActive ? "#000000" : "#6b7280"} size={22}/>
                  <span className="flex-1 ms-3 whitespace-nowrap">Manage Product</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to="addNewProduct"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 group" end>
                {({ isActive }) => (
                  <>
                  <FaChartPie color={isActive ? "#000000" : "#6b7280"} size={22}/>
                  <span className="flex-1 ms-3 whitespace-nowrap">Add New Product</span>
                  </>
                )}
              </NavLink>
              </li>
              <li>
              <NavLink
                to="myProfile"
                className={({isActive}) => {
                  return (
                    `flex items-center p-2 text-gray-900 rounded-lg ${isActive && 'bg-gray-100'}  hover:bg-gray-100 group`
                  )
                }} end>
                {({ isActive }) => (
                  <>
                  <FaChartPie color={isActive ? "#000000" : "#6b7280"} size={22}/>
                  <span className="flex-1 ms-3 whitespace-nowrap">My Profile</span>
                  </>
                )}
              </NavLink>
              </li>
            </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
            <Outlet></Outlet>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DashboardLayout
