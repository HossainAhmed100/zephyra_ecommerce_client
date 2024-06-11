import ProductCard from "../../Components/ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { IoFilter } from "react-icons/io5";
import {Button, Divider, Select, SelectItem, Slider} from "@nextui-org/react";
import { useState } from "react";

function AllProduct() {
  // State to track the open/close status of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState([100, 300]);
  const axiosPublic = useAxiosPublic();
  const {data: products = []} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
    const res = await axiosPublic.get("/products/0");
    return res.data
    }
  })

  const cardShows = [
    {key: "20", label: "20"},
    {key: "60", label: "60"},
    {key: "80", label: "80"},
    {key: "100", label: "100"},
  ]

  const fillterSelect = [
    {key: "default", label: "Default"},
    {key: "low", label: "Price (Low > High)"},
    {key: "high", label: "Price (High > Low)"},
  ]
  
  return (
    <section className="max-w-7xl p-4 m-auto">
      <div className="flex items-start justify-center gap-8">
        <div id="logo-sidebar" className={`flex flex-col top-0 left-44 z-30 w-64 gap-2 transition-transform ${!isMenuOpen && "translate-x-0"} sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
          <div className="bg-white shadow-sm w-64 rounded-md">
            <p className="p-4 text-gray-700 text-base font-medium">Price Range</p>
            <Divider />
            <div className="flex flex-col gap-4 w-full p-4 h-full max-w-md items-start justify-center">
              <Slider 
                formatOptions={{style: "currency", currency: "USD"}}
                step={10}
                maxValue={1000}
                minValue={0}
                value={value} 
                onChange={setValue}
                className="max-w-md"
              />
              <div className="flex w-full items-center justify-between">
                <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                  ${value[0]}
                </div>
                <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                  ${value[1]}  
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm w-64 rounded-md">
            <p className="p-4 text-gray-700 text-base font-medium">Price Range</p>
            <Divider />
            <div className="flex flex-col gap-4 w-full p-4 h-full max-w-md items-start justify-center">
              <Slider 
                formatOptions={{style: "currency", currency: "USD"}}
                step={10}
                maxValue={1000}
                minValue={0}
                value={value} 
                onChange={setValue}
                className="max-w-md"
              />
              <div className="flex w-full items-center justify-between">
                <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                  ${value[0]}
                </div>
                <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                  ${value[1]}  
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm w-64 rounded-md">
            <p className="p-4 text-gray-700 text-base font-medium">Price Range</p>
            <Divider />
            <div className="flex flex-col gap-4 w-full p-4 h-full max-w-md items-start justify-center">
              <Slider 
                formatOptions={{style: "currency", currency: "USD"}}
                step={10}
                maxValue={1000}
                minValue={0}
                value={value} 
                onChange={setValue}
                className="max-w-md"
              />
              <div className="flex w-full items-center justify-between">
                <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                  ${value[0]}
                </div>
                <div className="w-16 p-1 rounded-md border-1 border-gray-300 text-center text-[14px]">
                  ${value[1]}  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex-col gap-4">
          <div className="flex rounded-md shadow-sm items-center bg-white justify-between p-3">
              <div>
              <Button variant="flat" color="default" onClick={() => setIsMenuOpen(!isMenuOpen)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" className="inline-flex text-gray-700 lg:hidden">
                  <IoFilter size={18}/>
                  <span className="text-base font-medium">Filter</span>
              </Button>
              <span className="text-gray-700 hidden lg:inline-flex text-base font-medium">All Devcie</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="hidden lg:block">
                <Select
                  size="sm"
                  labelPlacement={"outside-left"}
                  label="Show"
                  defaultSelectedKeys={["20"]}
                  className="w-[100px] items-center"
                >
                  {cardShows.map((shows) => (
                    <SelectItem key={shows.key}>
                      {shows.label}
                    </SelectItem>
                  ))}
                </Select>
                </div>
                <div>
                <Select
                  size="sm"
                  labelPlacement={"outside-left"}
                  label="Fillter"
                  defaultSelectedKeys={["default"]}
                  className="w-[220px] items-center"
                >
                  {fillterSelect.map((filter) => (
                    <SelectItem key={filter.key}>
                      {filter.label}
                    </SelectItem>
                  ))}
                </Select>
                </div>
              </div>
          </div>
          <div className="w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 py-6">
              {products.map((item) => <ProductCard key={item?._id} product={item}/>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default AllProduct
