import { FaLevelUpAlt } from "react-icons/fa"
import { sidebarData } from "../../data/sidebar"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineSetting } from "react-icons/ai"

const Sidebar = () => {
    const location = useLocation()
    const pathname = location.pathname


    return <div className="w-[90px] top-0 fixed bg-blue-600 h-[100vh] ">
        <div className="bg-violet-800 flex justify-center items-center py-4">
            <FaLevelUpAlt color="white" />
            <span className="bg-white text-violet-800 text-[20px]">EG</span>
        </div>
        <section className="mt-16 flex flex-col gap-4 ">
            {sidebarData.map((value, ind) => {
                return <span key={ind}>
                    <Link to={value.link}>
                        <div className={`flex flex-col justify-center items-center gap-2 py-2 ${pathname === value.link ? "bg-violet-600" : "bg-blue-600"}`}>
                            <value.icon className={`h-6 w-6 ${pathname === value.link ? "text-blue-900" : "text-white"}`} />
                            <span className={`capitalize text-[12px] text-white`}>{value.title}</span>
                        </div>
                    </Link>
                </span>
            })}
        </section>
        <section className="absolute bottom-5 left-5">
            <div className="flex flex-col justify-center items-center">
                <AiOutlineSetting className="h-6 w-6" color="white" />
                <span className="capitalize text-[12px] text-white">Setting</span>
            </div>
        </section>
    </div>
}
export default Sidebar