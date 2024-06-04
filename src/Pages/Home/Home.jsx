import { Helmet } from "react-helmet-async"
import Banner from "./Banner"

function Home() {
  return (
    <section>
      <Helmet title='Home | Zephyar Online Shop'/>
      <div className="m-auto max-w-[1024px]">
      <Banner />
      </div>
    </section>
  )
}

export default Home
