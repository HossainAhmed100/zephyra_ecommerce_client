import { Helmet } from "react-helmet-async"
import TopService from "../../components/top-service/TopService"
import FlashSeles from "./flash-sales/FlashSeles"
import NewArrival from "./new-arrivals/NewArrival"
import BrowseByCategory from "./browse-by-category/BrowseByCategory"
import Banner from "./banner/Banner"
import BestSallingItems from "./best-selling-items/BestSallingItems"

function Home() {
  return (
    <main>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-6xl">
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
