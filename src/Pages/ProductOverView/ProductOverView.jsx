import { useState } from 'react';
import { FaPlus, FaMinus, FaStar, FaHeart } from 'react-icons/fa';
import { Button, Divider} from '@nextui-org/react';
import { FaCartShopping } from "react-icons/fa6";
import { IoMdGlobe, IoIosTimer } from "react-icons/io";
import { LuShieldOff } from "react-icons/lu";
import { CiLocationOn, CiMoneyBill } from "react-icons/ci";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [mainImage, setMainImage] = useState('https://i.ibb.co/mHQ61dS/playstations.png');
  const [selectedImage, setSelectedImage] = useState('https://i.ibb.co/mHQ61dS/playstations.png');

  const product = {
    name: 'Havic HV G-92 Gamepad',
    price: 192,
    rating: 4.5,
    reviews: 150,
    availability: 'In Stock',
    description: 'Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    colors: ['Red', 'Black', 'Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://i.ibb.co/mHQ61dS/playstations.png',
      'https://i.ibb.co/3s7hJKD/laptop.png',
      'https://i.ibb.co/92nThYH/dfdf.jpg',
      'https://i.ibb.co/mHQ61dS/playstations.png'
    ],
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(0, prev + change));
  };

  const commaSeparator = (price) => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(price);
  };


  return (
    <div>
    <div className="grid md:grid-cols-3 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-10">
      <div className="grid gap-4 md:col-span-1">
        <div className="grid gap-4">
          <img
            alt="product"
            className="aspect-square object-contain  bg-gray-100 p-4 border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            src={mainImage}
          />
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                alt={`product thumbnail ${index + 1}`} 
                src={img} 
                className={`w-full bg-gray-100 rounded-md h-full aspect-square p-2 object-contain cursor-pointer ${selectedImage === img ? 'border-2 border-gray-200' : ''}`}
                onClick={() => { setMainImage(img); setSelectedImage(img); }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="md:col-span-2 grid grid-cols-3 gap-4 items-start">
        <div className="grid gap-4 md:gap-6 col-span-2 items-start">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
            <div className="flex items-center">
              <span className="text-yellow-500 flex items-start justify-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="ml-2 text-gray-600">({product.reviews} Reviews) |</span>
              <span className="ml-2 text-green-500">{product.availability}</span>
            </div>
            <p className="text-2xl font-semibold">${commaSeparator(product.price)}</p>
            <p>{product.description}</p>
          </div>
          <Divider className='text-gray-300'/>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <span className="text-base">Colours:</span>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <Button
                    size='sm'
                    key={index}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`border px-4 py-2 rounded ${selectedColor === color ? 'bg-red-100 text-red-500 border-red-500' : ''}`}
                    variant="flat"
                    color="default"
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <span className="text-base">Size:</span>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    size='sm'
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`border px-4 py-2 rounded ${selectedSize === size ? 'bg-red-100 text-red-500 border-red-500' : ''}`}
                    variant="flat"
                    color="default"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 justify-center">
              <span className="text-base">Quantity:</span>
              <div className="flex items-center gap-2 border-2 rounded-md border-gray-300">
                <Button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  radius="sm"
                  isIconOnly
                  color="default"
                  variant="flat"
                  size='sm'
                  className='border-r-2 border-gray-300 rounded-none'
                >
                  <FaMinus size={14} />
                </Button>
                <span className='px-4 w-16 text-center'>{quantity}</span>
                <Button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  radius="sm"
                  isIconOnly
                  color="default"
                  variant="flat"
                  size='sm'
                  className='border-l-2 border-gray-300 rounded-none'
                >
                  <FaPlus size={14} />
                </Button>
              </div>
            </div>
            <div className="flex gap-2 lg:flex-row items-end justify-center">
              <Button radius='sm' startContent={<FaCartShopping size={20}/>} type="submit" className="bg-red-500 text-white flex-1" size="md">
                Add To Cart
              </Button>
              <Button radius='sm' color='default' variant='flat' isIconOnly>
                <FaHeart />
              </Button>
            </div>
            
          </form>
          <div className="grid gap-2 mt-2 ml-4">
          <span className='text-base font-medium text-gray-700 underline'>Benefits</span>
          <ul className="list-disc">
              <li>Warranty included</li>
              <li>Free return within 30 days</li>
              <li>Damage and theft insurance</li>
            </ul>
          </div>
        </div>
        <div className="grid bg-gray-100 p-4 gap-6">
          <div><p className='text-tiny text-gray-700'>Delivery</p></div>
          <div className='flex items-start justify-start gap-2 text-black'>
            <CiLocationOn className='mt-1' size={16}/>
            <p className='flex-1 text-[14px] font-normal'>
              Dhaka, Dhaka North, Banani Road No. 12 - 19
            </p>
          </div>
          <div className='flex items-start justify-center gap-2 text-black'>
            <IoMdGlobe className='mt-1' size={16}/>
            <p className='flex-1 text-[14px] font-normal'>Ships from Overseas</p>
          </div>
          <div className='flex items-start justify-start gap-2 text-black'>
            <CiMoneyBill className='mt-1' size={16}/>
            <p className='flex-1 text-[14px] font-normal'>Cash on Delivery Available</p>
          </div>
          <div><p className='text-tiny text-gray-700'>Delivery</p></div>
          <div className='flex items-start justify-start gap-2 text-black'>
            <IoIosTimer className='mt-1' size={16}/>
            <div className='flex-1'>
              <p className='text-[14px] font-normal'>7 Days Returns</p>
              <p className='text-gray-600 text-[12px] font-normal'>Change of mind is not applicable</p>
            </div>
          </div>
          <div className='flex items-start justify-start gap-2 text-black'>
            <LuShieldOff className='mt-1' size={16}/>
            <p className='flex-1 text-[14px] font-normal'>Warranty not available</p>
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
    </div>
  );
};

export default ProductDetails;
