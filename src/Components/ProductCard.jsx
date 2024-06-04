import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";

function ProductCard({shoe}) {
  const commaSeparetor = (price) => {
    const options = {  maximumFractionDigits: 2 };
    const result = Intl.NumberFormat("en-US",options).format(price);
    return result;
  }
  return (
    <Card className="py-4 border-1">
      <div className="bg-black rounded-r-lg absolute w-14 items-center p-2 top-6 left-0">
        <p className="text-white font-bold text-tiny uppercase text-center">NEW</p>
      </div>
      <CardBody className="overflow-visible items-center py-2">
      <Image
        alt="Card background"
        className="object-cover"
        src={shoe?.image_url}
        width={270}
      />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{shoe?.title}</h4>
        <div className="flex items-center justify-between w-full py-2">
          <div className="flex items-center justify-start gap-2">
            <p className="uppercase text-lg font-medium">Tk. {commaSeparetor(shoe?.price)}</p>
            <small className="text-default-500 line-through">Tk.500</small>
          </div>
          <Button isIconOnly radius="full" className="bg-black text-white shadow-lg" aria-label="Like">
            <Link to={`/allProduct/${shoe?.id}`}><CgArrowTopRight size={25}/></Link>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default ProductCard
