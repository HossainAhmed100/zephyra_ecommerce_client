import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllProductsPage from "../Pages/AllProductsPage/AllProductsPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProductPage from "../Pages/Admin/AddProductPage/AddProductPage";
import ManageProductsPage from "../Pages/Admin/ManageProductsPage/ManageProductsPage";
import ProfilePage from "../Pages/Admin/ProfilePage/ProfilePage";
import EditProductPage from "../Pages/Admin/EditProductPage/EditProductPage";
import CookiesPolicyPage from "../Pages/Policy/CookiesPolicyPage";
import TermsAndConditionsPage from "../Pages/Policy/TermsAndConditionsPage";
import PrivacyPolicyPage from "../Pages/Policy/PrivacyPolicyPage";
import CompanyLicensePage from "../Pages/Policy/CompanyLicensePage";
import AdminDashboardPage from "../Pages/Admin/AdminDashboardPage/AdminDashboardPage";
import EditProfilePage from "../Pages/Admin/ProfilePage/EditProfilePage";
import TopSellingProductsPage from "../Pages/Admin/TopSellingProductsPage/TopSellingProductsPage";
import Blog from "../Pages/Blog/Blog";
import ReadBlogPage from "../Pages/Blog/ReadBlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <ReadBlogPage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/all-products", element: <AllProductsPage /> },
      {
        path: "/all-products/:id",
        element: <ProductDetailsPage />,
        loader: ({ params }) => fetch(`http://localhost:5000/productsById/${params.id}`),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cookies-policy", element: <CookiesPolicyPage /> },
      { path: "/company-license", element: <CompanyLicensePage /> },
      { path: "/terms-and-conditions", element: <TermsAndConditionsPage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
    children: [
      { path: "", element: <AdminDashboardPage /> },
      { path: "add-new-product", element: <AddProductPage /> },
      { path: "manage-products", element: <ManageProductsPage /> },
      { path: "top-selling-products", element: <TopSellingProductsPage /> },
      { path: "my-profile", element: <ProfilePage /> },
      { path: "update-my-profile", element: <EditProfilePage /> },
      {
        path: "manage-products/update-product/:id",
        element: <EditProductPage />,
        loader: ({ params }) => fetch(`http://localhost:5000/productsById/${params.id}`),
      },
    ],
  },
]);

export default router;
