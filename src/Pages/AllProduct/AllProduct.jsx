import ProductCard from "../../Components/ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { IoFilter } from "react-icons/io5";
import { Button, Divider, Select, SelectItem, Slider } from "@nextui-org/react";
import { useState } from "react";
import FiltarAccording from "../../Components/FiltarAccording";

function AllProduct() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("🚀 ~ AllProduct ~ isMenuOpen:", isMenuOpen)
  const [priceRange, setPriceRange] = useState([100, 300]);
  const axiosPublic = useAxiosPublic();
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products/0");
      return res.data;
    },
  });

  const cardShows = [
    { key: "20", label: "20" },
    { key: "60", label: "60" },
    { key: "80", label: "80" },
    { key: "100", label: "100" },
  ];

  const filterSelect = [
    { key: "default", label: "Default" },
    { key: "low", label: "Price (Low > High)" },
    { key: "high", label: "Price (High > Low)" },
  ];

  const availabilityItems = [
    { label: "In Stock", value: "instock" },
    { label: "Pre Order", value: "preorder" },
    { label: "Up Coming", value: "upcoming" },
  ];

  return (
    <section className="max-w-7xl p-4 m-auto">
      <div className="flex items-start gap-6 w-full">
        <aside
          id="logo-sidebar"
          className={` lg:bg-transparent bg-white rounded-md lg:static fixed ${!isMenuOpen && "fixed -translate-x-[500px] lg:translate-x-0"} z-30 transition-transform`}
          aria-label="Sidebar"
        >
          <div className="flex flex-col w-64 gap-2 h-fit">
            <div className="bg-white shadow-sm w-64 rounded-md">
              <p className="px-4 py-3 text-gray-700 text-[14px] font-normal">Price Range</p>
              <Divider className="bg-gray-200"/>
              <div className="flex flex-col gap-4 w-full p-4 h-full max-w-md items-start justify-center">
                <Slider
                    formatOptions={{ style: "currency", currency: "USD" }}
                    step={10}
                    maxValue={1000}
                    minValue={0}
                    value={priceRange}
                    onChange={setPriceRange}
                    className="max-w-md"
                    aria-label="Price Range Selector"
                  />
                  <div className="flex w-full items-center justify-between">
                    <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                      ${priceRange[0]}
                    </div>
                    <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                      ${priceRange[1]}
                    </div>
                  </div>
              </div>
            </div>
            <div className="bg-white shadow-sm w-64 rounded-md">
              <FiltarAccording title="Availability" items={availabilityItems} />
            </div>
          </div>
        </aside>

        <div className="flex flex-col flex-1 gap-2">
          <div className="flex rounded-md shadow-sm items-center bg-white justify-between p-3">
            <div>
              <Button
                variant="flat"
                color="default"
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                className="inline-flex text-gray-700 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <IoFilter size={18} />
                <span className="text-base font-medium">Filter</span>
              </Button>
              <span className="text-gray-700 hidden lg:inline-flex text-base font-medium">
                All Device
              </span>
            </div>
            <div className="flex items-start gap-4">
              <div className="hidden lg:block">
                <FilterSelect label="Show" options={cardShows} defaultKey="20" width="120px" />
              </div>
              <FilterSelect label="Filter" options={filterSelect} defaultKey="default" width="220px" />
            </div>
          </div>
          <div className="w-full">
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pb-6">
              {products.map((item) => (
                <ProductCard key={item?._id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function FilterSelect({ label, options, defaultKey, width }) {
  return (
    <div>
      <Select
        size="sm"
        labelPlacement="outside-left"
        label={label}
        defaultSelectedKeys={[defaultKey]}
        className={`w-[${width}] items-center`}
        aria-label={label}
      >
        {options.map((option) => (
          <SelectItem aria-label={option.label} key={option.key}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default AllProduct;
