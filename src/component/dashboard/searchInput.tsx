import { ChangeEvent, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"

const SearchInput = ({ placeholder }: { placeholder: string }) => {
    const [value, setValue] = useState<string>()
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return <>
        <section className="flex items-center  rounded-md border-[1px] border-blue-200" >
            <AiOutlineSearch className="h-6 w-6" color="#1AA7EC" />
            <input value={value} onChange={(e) => onSearchChange(e)}

                className="px-2 py-2  w-full rounded-md  
                focus:outline-0 " placeholder={placeholder} />
        </section>
    </>
}
export default SearchInput