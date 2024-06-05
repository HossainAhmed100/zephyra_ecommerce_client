import ProductCard from "../../Components/ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

function AllProduct() {
  const axiosPublic = useAxiosPublic();
  const {data: products = []} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
    const res = await axiosPublic.get("/products/0");
    return res.data
    }
  })

  return (
    <div className="max-w-[1024px] m-auto py-6 sm:py-8 lg:py-16 px-4 md:px-8">
       <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 py-6">
        {products.map((item) => <ProductCard key={item?._id} product={item}/>)}
      </div>
    </div>
  )
}

export default AllProduct
