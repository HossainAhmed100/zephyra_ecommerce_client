import OfferTimer from "../../../Components/OfferTimer"


function FlashSeles() {
  return (
    <div className="py-20">
      <div className="flex items-center justify-start gap-4">
        <div className="w-4 h-6 bg-red-500 rounded-sm"></div>
        <h2 className="text-red-500 font-semibold text-lg">Tody's</h2>
      </div>
      <div className="pt-2 flex items-center justify-start gap-6">
      <h1 className="text-3xl font-semibold">Flash Sales</h1>
      <OfferTimer duration={2 * 24 * 60 * 60 * 1000}/>
      </div>
    </div>
  )
}

export default FlashSeles
