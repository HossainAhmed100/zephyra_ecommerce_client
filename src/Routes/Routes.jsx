import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllProduct from "../Pages/AllProduct/AllProduct";
import ProductOverView from "../Pages/ProductOverView/ProductOverView";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import AddNewProduct from "../Pages/Admin/AddNewProduct/AddNewProduct";
import ManageProduct from "../Pages/Admin/ManageProduct/ManageProduct";
import MyProfile from "../Pages/Admin/MyProfile/MyProfile";
import UpdateProduct from "../Pages/Admin/UpdateProduct/UpdateProduct";
import CookiesPolicy from "../Pages/Policy/CookiesPolicy";
import TermsAndContitions from "../Pages/Policy/TermsAndContitions";
import PrivacyPolicy from "../Pages/Policy/PrivacyPolicy";
import CompanyLincense from "../Pages/Policy/CompanyLincense";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import UpdateMyProfile from "../Pages/Admin/MyProfile/UpdateMyProfile";
import TopSelingProducts from "../Pages/Admin/TopSelingProducts/TopSelingProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/allProduct",
            element: <AllProduct />
        },
        {
            path: "/allProduct/:id",
            element: <ProductOverView />,
            loader: ({params}) => fetch(`http://localhost:5000/productsById/${params.id}`),
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/cookiesPolicy",
            element: <CookiesPolicy />
        },
        {
            path: "/companyLincense",
            element: <CompanyLincense />
        },
        {
            path: "/termsAndContitions",
            element: <TermsAndContitions />
        },
        {
            path: "/privacyPolicy",
            element: <PrivacyPolicy />
        },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children: [
        {
            path: "",
            element: <Dashboard />
        },
        {
            path: "addNewProduct",
            element: <AddNewProduct />
        },
        {
            path: "manageProduct",
            element: <ManageProduct />
        },
        {
            path: "topSelingProducts",
            element: <TopSelingProducts />
        },
        {
            path: "myProfile",
            element: <MyProfile />
        },
        {
            path: "updateMyProfile",
            element: <UpdateMyProfile />
        },
        {
            path: "manageProduct/updateProduct/:id",
            element: <UpdateProduct />,
            loader: ({params}) => fetch(`http://localhost:5000/productsById/${params.id}`)
        }
    ]
},

])

export default router;
