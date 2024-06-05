import { Helmet } from "react-helmet-async"
import Banner from "./Banner"
import TopService from "../../Components/TopService/TopService"
import FlashSeles from "./FlashSeles/FlashSeles"
import NewArrival from "./NewArrival/NewArrival"

function Home() {
  return (
    <main>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-[1024px]">
      <Banner />
      <FlashSeles />
      <NewArrival />
      <TopService />
      </div>
    </main>
  )
}

export default Home
