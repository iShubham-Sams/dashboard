import { useState } from "react"
import { trackedCartData } from "../../data/dashboard"

const TrackCard = () => {
    const [data, setData] = useState(trackedCartData)


    // modifiedData
    const modifiedData = (dragStartIndex: string, dragEndIndex: number) => {
        let tempArray = data
        let result = []
        for (let i = 0; i < tempArray.length; i++) {
            if (parseInt(dragStartIndex) !== i) {
                result.push(tempArray[i])
            }
        }
        result.splice(dragEndIndex, 0, tempArray[parseInt(dragStartIndex)])
        setData(result)
    }
    const allowDrop = (event: React.DragEvent) => {
        event.preventDefault();
    }
    let dragindex: string | null = null
    const onDragStart = (e: React.DragEvent<HTMLDivElement>, ind: number) => {
        dragindex = ind.toString()
    }
    const onDrop = (e: React.DragEvent<HTMLDivElement>, dragIndex: string | null, dragEnd: number) => {
        e.preventDefault();
        if (dragIndex) {
            modifiedData(dragIndex, dragEnd)
        }
    }



    return <>{
        data.map((value, ind) => {
            const bgcolor = value.color
            return <div key={ind} style={{ background: bgcolor }}
                className={`text-white p-4 cursor-pointer`}
                onDragStart={(e) => onDragStart(e, ind)}
                onDragOver={allowDrop}
                onDrop={(key) => onDrop(key, dragindex, ind)}
                draggable>
                <p className="uppercase">{value.title}</p>
                <span className="flex justify-between border-b-[1px] border-b-gray-100">
                    <p className="text-[24px]">{value.number}</p>
                    <p>{value.money}</p>
                </span>
                <span className="flex justify-between ">
                    <p>{value.percent}%</p>
                    <p>{value.profitlos}%</p>
                </span>
            </div>
        })
    }</>
}
export default TrackCard