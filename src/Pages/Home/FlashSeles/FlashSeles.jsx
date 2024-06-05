import OfferTimer from "../../../Components/OfferTimer"


function FlashSeles() {
  return (
    <div className="py-6 sm:py-8 lg:py-12 px-4 md:px-8">
      <div className="flex md:items-center items-start md:flex-row flex-col md:justify-between gap-6">
      <div className="pt-2 order-last md:-order-last w-full flex flex-col items-start justify-start gap-6">
      <div className="flex items-center justify-start gap-4">
        <div className="w-4 h-6 bg-red-500 rounded-sm"></div>
        <h2 className="text-red-500 font-semibold text-lg">Tody's</h2>
      </div>
      <h1 className="text-3xl font-semibold">Flash Sales</h1>
      </div>
      <div className="w-full flex items-center justify-center">
      <OfferTimer duration={2 * 24 * 60 * 60 * 1000}/>
      </div>
      </div>
    </div>
  )
}

export default FlashSeles
