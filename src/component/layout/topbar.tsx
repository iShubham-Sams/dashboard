import { ChangeEvent, useState } from "react"
import { topbarSelectData } from "../../data/topbar"
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotificationsNone } from 'react-icons/md'

const Topbar = () => {
    const [selectValue, setSelectValue] = useState<string>()
    const [searchValue, setSearchValue] = useState<string>()
    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value)
    }
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    return <div className="flex justify-between ml-[90px] border-b-[1px] border-b-gray-100">
        <div className="flex">
            <section>
                <select name="dashboard" onChange={(e) => onSelectChange(e)} value={selectValue}
                    className="capitalize px-2 py-5 bg-white border-[1px] border-gray-100 focus:outline-[1px] focus:outline-gray-100">
                    {topbarSelectData.map((val, index) => {
                        return <option key={index} value={val.value} className="capitalize">{val.title}</option>
                    })}
                </select>
            </section>
            <section className="flex items-center ml-4" >
                <AiOutlineSearch className="h-10 w-10" color="#1AA7EC" />
                <input value={searchValue} onChange={(e) => onSearchChange(e)}

                    className="px-2 py-2 w-[40rem]  
                focus:outline-0 " placeholder="Search by docket no , transporter, driver name" />
            </section>
        </div>
        <div className="relative py-2">
            <MdNotificationsNone className="mt-1 mr-1 h-6 w-6" />
            <span className="h-2 w-2 rounded-full bg-red-500 absolute top-3 right-1"></span>
        </div>
    </div>
}
export default Topbar