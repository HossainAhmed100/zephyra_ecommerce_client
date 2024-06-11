import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar  } from "react-icons/fa6";


function ProductCard({product}) {
    const {model, price, discount, rating,thumbnail, _id} = product;

    const commaSeparetor = (price) => {
      const options = {  maximumFractionDigits: 2 };
      const result = Intl.NumberFormat("en-US",options).format(price);
      return result;
    }
    const percentage = (discount, price) => {
        const num = (100 * discount) / price;
        return parseFloat(num).toFixed(2)
    }
  return (
    <Link to={`/allProduct/${_id}`}>
    <Card className="pb-4 bg-white hover:border-1 hover:border-gray-200 transition shadow-sm rounded-md duration-700 ease-in-out border-1 border-transparent">
      {discount > 10 && <div className="bg-red-500 rounded-r-lg z-10 absolute items-center p-2 top-6 left-0">
        <p className="text-white font-bold text-tiny uppercase text-center">OFF {percentage(discount, price)}%</p>
      </div>}
      <CardBody className="overflow-visible items-center p-6">
      <Image
        alt="Card background"
        className="object-cover w-full h-32 object-center transition duration-200 group-hover:scale-110"
        src={thumbnail}
      />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-[14px] font-medium text-gray-700">{model}</h4>
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-center justify-start gap-2">
            <p className="uppercase text-lg font-medium text-red-500">$ {commaSeparetor(price)}</p>
            <small className="text-default-500 line-through">${discount}</small>
          </div>
        </div>
        <div className="flex items-start justify-start gap-1">
      <FaStar color="orange"/>
      <FaStar color="orange"/>
      <FaStar color="orange"/>
      <FaRegStar  color="orange"/>
      <FaRegStar  color="orange"/>
      <span className="text-tiny text-default-500">({rating})</span>
      </div>
      </CardHeader>
      
    </Card>
    </Link>
  )
}

export default ProductCard
