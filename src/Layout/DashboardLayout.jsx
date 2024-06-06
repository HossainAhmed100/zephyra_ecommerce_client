import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {Button, Image} from "@nextui-org/react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FaAngleRight, FaArrowRightFromBracket } from "react-icons/fa6";
import "./DashboardLayout.css"
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

function DashboardLayout() {
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <div className="w-72">
      <div className="mainSidebar !border-r-small  border-divider flex-col flex w-full transition-width p-6">
      <div className="flex items-center gap-3 px-3">
        <span className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-8 h-8 text-tiny bg-default text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-default flex-none">
        <Image src={"https://i.ibb.co/0K4MfB3/profile.jpg"} alt="avatar" />
        </span>
        <div className="flex max-w-full flex-col">
        <p className="truncate text-small font-medium text-default-600">{"Hossain Ahmed"}</p>
          <p className="truncate text-tiny text-default-400">Product Manager</p>
        </div>
      </div>
      <div className="overflow-y-auto -mr-6 h-full py-6 pr-6" data-orientation="vertical" data-top-scroll="false" data-bottom-scroll="true">
        <div data-slot="base" className="w-full relative flex flex-col gap-1 p-1 list-none">
          <nav data-slot="list" className="w-full flex flex-col gap-0.5 outline-none items-center h-32	">
          <li className="relative mb-2 w-full">
            <span className="pl-1 text-tiny text-foreground-500" data-slot="heading">Pages</span>
            <ul className="mt-2 space-y-1">
              <li>
                <CustomNavLink path="manageProduct" title="Manage Product"/>
                <CustomNavLink path="addNewProduct" title="Add New Product"/>
                <CustomNavLink path="myProfile" title="My Profile"/>
              </li>
            </ul>
          </li>
          </nav>
        </div>
      </div>
      <span aria-hidden="true" className="w-px h-px block ml-1 mt-8"></span>
      <div className="mt-auto flex flex-col">
      <Button onClick={async () => {
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
          }
        }} color="danger" startContent={<FaArrowRightFromBracket />}>
        Sign Out
      </Button> 
      </div>
      </div>
      </div>
      <div className="w-full flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  )
}


const CustomNavLink = ({path, title}) => {
  return(
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex group gap-2 items-center justify-between relative py-1.5 w-full cursor-pointer outline-none px-3 rounded-large h-[44px] duration-200 ease-in-out ${
          isActive ? 'bg-gray-200' : 'bg-transparent'
        }`}>
      {({ isActive }) => (
      <>
      <span className={`flex-1 ml-1 truncate text-small font-medium ${isActive ? "text-black" : "text-gray-500"} group-data-[selected=true]:text-foreground`} data-slot="heading">{title}</span>
      <FaAngleRight size={13} color={isActive ? "black" : "#6B7280"}/>
      </>
      )}
    </NavLink>
  )
}

export default DashboardLayout
