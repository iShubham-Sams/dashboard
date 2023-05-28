import { GoDashboard } from "react-icons/go"
import { FaShippingFast } from "react-icons/fa"
import { CiLocationOn } from 'react-icons/ci'
import { MdGroups2 } from 'react-icons/md'
import { IoIosAnalytics } from 'react-icons/io'

export const sidebarData = [
    { title: "dashboard", icon: GoDashboard, link: '/' },
    { title: "trips", icon: FaShippingFast, link: '/trips' },
    { title: "tracking", icon: CiLocationOn, link: '/tracking' },
    { title: "transporters", icon: MdGroups2, link: '/transporters' },
    { title: "analytics", icon: IoIosAnalytics, link: '/analytics' }

]