import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import Topbar from "./topbar"

const Layout = () => {
    return <div>
        <Topbar />
        <div className="ml-[90px]">
            <Outlet />
        </div>
        <Sidebar />
    </div>
}

export default Layout