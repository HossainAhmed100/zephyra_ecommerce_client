import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { RiShoppingCartFill } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuShieldCheck, LuCircleDollarSign, LuShoppingBag } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

function About() {
  return (
    <div className="p-4">
      <div className="max-w-[1024px] m-auto">
        {/* Our Story Section */}
        <section className="py-20 min-h-screen">
          <div className="m-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Our Story
                </h1>
                <p className="mt-10 max-w-[600px] text-gray-600 md:text-base">
                  Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                </p>
                <p className="mt-4 max-w-[600px] text-gray-600 md:text-base">
                  Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
                </p>
              </div>
              <img
                src="https://i.ibb.co/30D1SDM/q.png"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Report Cards Section */}
        <section className="pb-20">
          <div className="m-auto px-4">
            <div className="grid gap-6 md:grid-cols-4">
              <ReportCard 
                icon={<RiShoppingCartFill size={24} color="white" />} 
                title={"10.5k"} 
                description={"Sellers active on our site"} 
              />
              <ReportCard 
                icon={<LuCircleDollarSign size={24} color="white" />} 
                title={"33k"} 
                description={"Monthly Product Sales"} 
              />
              <ReportCard 
                icon={<LuShoppingBag size={24} color="white" />} 
                title={"45.5k"} 
                description={"Customers active on our site"} 
              />
              <ReportCard 
                icon={<FaSackDollar size={24} color="white" />} 
                title={"25k"} 
                description={"Annual gross sales on our site"} 
              />
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="w-full py-12 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 mb-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet Our Talented Team
                </h2>
                <p className="max-w-[600px] text-gray-500 lg:text-base/relaxed dark:text-gray-400">
                  Our team of experts is dedicated to providing the best solutions for our clients. Get to know the people behind Exclusive Inc.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <TeamCard 
                name="Tom Cruise" 
                tag="Founder & Chairman" 
                imageUrl={"https://i.ibb.co/GdSS19m/image-46.png"} 
              />
              <TeamCard 
                name="Emma Watson" 
                tag="Managing Director" 
                imageUrl={"https://i.ibb.co/85vrZDG/image-51.png"} 
              />
              <TeamCard 
                name="Will Smith" 
                tag="Product Designer" 
                imageUrl={"https://i.ibb.co/CQcNCnx/image-47.png"} 
              />
            </div>
          </div>
        </section>
        
        {/* Info Cards Section */}
        <section className="py-20">
          <div className="m-auto">
            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard 
                icon={<LiaShippingFastSolid size={24} color="white" />} 
                title={"FREE AND FAST DELIVERY"} 
                description={"Free delivery for all orders over $140"} 
              />
              <InfoCard 
                icon={<BiSupport size={24} color="white" />} 
                title={"24/7 CUSTOMER SERVICE"} 
                description={"Friendly 24/7 customer support"} 
              />
              <InfoCard 
                icon={<LuShieldCheck size={24} color="white" />} 
                title={"MONEY BACK GUARANTEE"} 
                description={"We return money within 30 days"} 
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// TeamCard Component: Displays information about a team member
const TeamCard = ({ name, tag, imageUrl }) => {
  return (
    <Card className="rounded-none shadow h-96">
      <CardBody className="items-center bg-gray-100 p-0">
        <div className="w-full h-80 overflow-hidden">
          <Image
            alt="Team Photo"
            src={imageUrl}
            className="object-cover w-full h-full"
          />
        </div>
      </CardBody>
      <CardHeader className="flex flex-col items-start gap-1 p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="text-gray-500 dark:text-gray-400">{tag}</div>
        <div className="flex items-start justify-start gap-2">
          <CiTwitter />
          <CiInstagram />
          <CiLinkedin />
        </div>
      </CardHeader>
    </Card>
  );
};

// ReportCard Component: Displays a statistic about the company
const ReportCard = ({ title, description, icon }) => {
  return (
    <Card className="shadow-none border-1 h-52 hover:border-gray-300 duration-1000 ease-in-out">
      <CardBody className="flex flex-col items-center justify-center gap-3 text-center">
        <div className="border-8 border-gray-300 p-2 bg-gray-800 rounded-full w-16 h-16 items-center justify-center flex">
          {icon}
        </div>
        <div className="text-2xl font-bold">{title}</div>
        <p className="text-gray-500 text-[14px]">{description}</p>
      </CardBody>
    </Card>
  );
};

// InfoCard Component: Displays information about a service offered by the company
const InfoCard = ({ title, description, icon }) => {
  return (
    <Card className="shadow-none h-52">
      <CardBody className="flex flex-col items-center justify-center gap-3 text-center">
        <div className="border-8 border-gray-300 p-2 bg-gray-800 rounded-full w-16 h-16 items-center justify-center flex">
          {icon}
        </div>
        <div className="text-[20px] font-bold">{title}</div>
        <p className="text-gray-500 text-[14px]">{description}</p>
      </CardBody>
    </Card>
  );
};

export default About;
