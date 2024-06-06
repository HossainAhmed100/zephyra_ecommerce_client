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
            element: <CookiesPolicy />
        },
        {
            path: "/termsAndContitions",
            element: <TermsAndContitions />
        },
        {
            path: "/privacyPolicy",
            element: <CookiesPolicy />
        },
    ]
  },
  {
    path: "Dashboard",
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children: [
        {
            path: "addNewProduct",
            element: <AddNewProduct />
        },
        {
            path: "manageProduct",
            element: <ManageProduct />
        },
        {
            path: "myProfile",
            element: <MyProfile />
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
