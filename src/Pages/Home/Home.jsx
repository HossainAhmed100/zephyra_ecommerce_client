import { Helmet } from "react-helmet-async"
import TopService from "../../Components/TopService/TopService"
import FlashSeles from "./FlashSeles/FlashSeles"
import NewArrival from "./NewArrival/NewArrival"
import BrowseByCategory from "./BrowseByCategory/BrowseByCategory"
import Banner from "./Banner/Banner"
import BestSallingItems from "./BestSallingItems/BestSallingItems"

function Home() {
  return (
    <main>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-7xl">
      <Banner />
      <FlashSeles />
      <BrowseByCategory />
      <BestSallingItems />
      <NewArrival />
      <TopService />
      </div>
    </main>
  )
}

export default Home
