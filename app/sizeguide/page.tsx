import Image from "next/image"

export default function SizeGuide() {
  return (
    <div className="flex flex-col items-center mb-40">
      <h1 className="text-2xl font-semibold">
        Size Guide
      </h1>
      <div className="w-10 h-[2px] bg-gray-400 my-3" />
      <h2 className="text-xl font-semibold my-5">Unisex T-Shirt</h2>
      <div className="flex items-center gap-4 flex-wrap justify-center px-5">
        <Image src="/images/size-chart/tshirt-unisex-size-chart.jpg" width={200} height={200} alt="tshirt size chart" className="h-96 w-auto" />
        <Image src="/images/size-chart/tshirt-unisex-diagram.jpg" width={200} height={200} alt="tshirt size diagram" className="w-auto h-72" />
      </div>
      <h2 className="text-xl font-semibold mb-5 mt-10">Unisex Jersey</h2>
      <Image src="/images/size-chart/jersey-unisex-size-chart.jpg" width={799} height={395} alt="tshirt size chart" className="h-auto w-5/6 max-w-4xl" />
    </div>
  )
}