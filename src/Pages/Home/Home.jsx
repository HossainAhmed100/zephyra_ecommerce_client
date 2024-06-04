import { Helmet } from "react-helmet-async"
import Banner from "./Banner"
import TopService from "../../Components/TopService/TopService"

function Home() {
  return (
    <section>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-[1024px]">
      <Banner />
      <TopService />
      </div>
    </section>
  )
}

export default Home
