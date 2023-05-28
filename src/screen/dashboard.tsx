import DetailCard from "../component/dashboard/detailCard"
import SearchInput from "../component/dashboard/searchInput"
import TrackCard from "../component/dashboard/trackCard"
import { containerData, inboundOutbound } from "../data/dashboard"

const DashboardScreen = () => {
    return <div className="p-4">
        <section className="grid grid-cols-7">
            <section className="col-span-5 grid grid-cols-5 border-l border-l-gray-100 rounded-l-lg 
            rounded-r-lg border
                 border-gray-100">
                {containerData.map((value, ind) => {
                    return <div key={ind} className="flex justify-center 
                    items-center px-4 py-2  text-blue-400 hover:bg-blue-600
                     hover:text-white cursor-pointer border-r border-r-gray-100 gap-1">
                        <p className="uppercase text-[16px] ">{value.title}</p>
                        <span className="text-[12px]">({value.number})</span>
                    </div>
                })}
            </section>
            <section className="col-span-2 grid grid-cols-2 border-l border-l-gray-100 rounded-l-lg 
            rounded-r-lg border
                 border-gray-100 ml-4">
                {inboundOutbound.map((value, ind) => {
                    return <div key={ind} className="flex justify-center 
                items-center px-4 py-2  text-blue-400 hover:bg-blue-600
                 hover:text-white cursor-pointer border-r border-r-gray-100 gap-1">
                        <p className="uppercase text-[16px] ">{value.title}</p>
                        <span className="text-[12px]">({value.number})</span>
                    </div>
                })}
            </section>
        </section>

        <section className="grid grid-cols-3 mt-4 gap-2">
            <SearchInput placeholder="Select transporter" />
            <SearchInput placeholder="Select plant/depot" />
            <SearchInput placeholder="Select item" />
        </section>
        <section className="grid grid-cols-6 gap-4 mt-4">
            <TrackCard />
        </section>
        <section className="grid grid-cols-2 gap-4 mt-4">
            <DetailCard />
        </section>
    </div>
}
export default DashboardScreen