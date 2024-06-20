import { Link, useLocation } from "react-router-dom"

const BreadCrumb = () => {
    const location = useLocation();
    const { pathname } = location;
    const segments = pathname.split('/');
    let url = '';
    const breadcrumblinks = segments.map((segment, i) => {
        url +=  `/${segment}`;
        return(
            <Link key={i} to={`http://localhost:5173${url}`}>   
                {segment === '' ? "Home" : segment}
            </Link>
        )
    })
    return breadcrumblinks;
}

export default BreadCrumb