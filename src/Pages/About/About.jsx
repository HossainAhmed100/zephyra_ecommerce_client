import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { RiShoppingCartFill } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuShieldCheck, LuCircleDollarSign, LuShoppingBag } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter,CiInstagram, CiLinkedin } from "react-icons/ci";


function About() {
  return (
    <div className="p-4">
    <div className="max-w-[1024px] m-auto">
    <section className="py-20 min-h-screen">
      <div className="m-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Story</h1>
            <p className="mt-10 max-w-[600px] text-gray-600 md:text-base">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>
            <p className="mt-4 max-w-[600px] text-gray-600 md:text-base">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
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
    <section className="pb-20">
      <div className="m-auto px-4">
        <div className="grid gap-6 md:grid-cols-4">
          <ReportCard 
          icon={<RiShoppingCartFill size={24} color="white"/>} 
          title={"10.5k"} 
          description={"Sallers active our site"}
          />
          <ReportCard 
          icon={<LuCircleDollarSign size={24} color="white"/>} 
          title={"33k"} 
          description={"Mopnthly Produduct Sale"}
          />
          <ReportCard 
          icon={<LuShoppingBag size={24} color="white"/>} 
          title={"45.5k"} 
          description={"Customer active in our site"}
          />
          <ReportCard 
          icon={<FaSackDollar size={24} color="white"/>} 
          title={"25k"} 
          description={"Anual gross sale in our site"}
          />
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Talented Team</h2>
            <p className="max-w-[600px] text-gray-500 lg:text-base/relaxed dark:text-gray-400"> Our team of experts is dedicated to providing the best solutions for our clients. Get to know the people behind Acme Inc. </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <TeamCard 
          name="Tom Cruise" 
          tag="Founder & Chairman" 
          imageUrl={"https://i.ibb.co/GdSS19m/image-46.png"}/>
          <TeamCard 
          name="Emma Watson" 
          tag="Managing Director" 
          imageUrl={"https://i.ibb.co/85vrZDG/image-51.png"}/>
          <TeamCard 
          name="Will Smith" 
          tag="Product Designer" 
          imageUrl={"https://i.ibb.co/CQcNCnx/image-47.png"}/>
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className=" m-auto">
        <div className="grid gap-6 md:grid-cols-3">
        <InfoCard 
          icon={<LiaShippingFastSolid size={24} color="white"/>} 
          title={"FREE AND FAST DELIVERY"} 
          description={"Free delivery for all orders over $140"}
          />
          <InfoCard 
          icon={<BiSupport size={24} color="white"/>} 
          title={"24/7 CUSTOMER SERVICE"} 
          description={"Friendly 24/7 customer support"}
          />
          <InfoCard 
          icon={<LuShieldCheck size={24} color="white"/>} 
          title={"MONEY BACK GUARANTEE"} 
          description={"We reurn money within 30 days"}
          />
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}

const TeamCard = ({name, tag, imageUrl}) => {
  return(
    <Card className="rounded-none shadow h-96">
      <CardBody className="items-center bg-gray-100">
        <Image
          alt="Team Photo"
          src={imageUrl}
          width={200}
          height={300}
          className="object-cover"
        />
      </CardBody>
      <CardHeader className="flex flex-col items-start gap-1">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="text-gray-500 dark:text-gray-400">{tag}</div>
        <div className="flex items-start justify-start gap-2"><CiTwitter /><CiInstagram /><CiLinkedin /></div>
      </CardHeader>
    </Card>
  )
}

const ReportCard = ({title, description, icon}) => {
  return(
    <Card className="shadow-none border-1 h-52">
    <CardBody className="flex flex-col items-center justify-center gap-3 text-center">
      <div className="border-8 border-gray-300 p-2 bg-gray-800 rounded-full w-16 h-16 items-center justify-center flex">
      {icon}
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <p className="text-gray-500 text-[14px]">{description}</p>
    </CardBody>
  </Card>
  )
}

const InfoCard = ({title, description, icon}) => {
  return(
    <Card className="shadow-none h-52">
    <CardBody className="flex flex-col items-center justify-center gap-3 text-center">
      <div className="border-8 border-gray-300 p-2 bg-gray-800 rounded-full w-16 h-16 items-center justify-center flex">
      {icon}
      </div>
      <div className="text-[20px] font-bold">{title}</div>
      <p className="text-gray-500 text-[14px]">{description}</p>
    </CardBody>
  </Card>
  )
}


export default About
