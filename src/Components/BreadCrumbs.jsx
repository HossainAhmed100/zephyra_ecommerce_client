import {Link, useLocation} from "react-router-dom";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log("🚀 ~ Breadcrumb ~ pathnames:", pathnames)
  let breadcrumbPath = "";
  console.log("🚀 ~ Breadcrumb ~ breadcrumbPath:", breadcrumbPath)

  // if (pathnames.length === 0) {
  //   // If the current route is the home route ('/'), do not render the breadcrumbs
  //   return null;
  // }

  return (
    <div className="breadcrumbs">
      <Breadcrumbs>  
      <BreadcrumbItem href="/">Home</BreadcrumbItem>  
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        console.log(pathnames, breadcrumbPath);

        return isLast ? (
      <BreadcrumbItem key={breadcrumbPath}>{name}</BreadcrumbItem>
        ) : (
      <BreadcrumbItem key={breadcrumbPath} href={`/${name}`}>{name}</BreadcrumbItem>
        );
      })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;