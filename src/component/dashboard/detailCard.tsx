import { MdNoEncryptionGmailerrorred, MdWarningAmber } from 'react-icons/md'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { setDetail } from '../../redux/sliceState/detailCardSlice'
import { BiRupee } from 'react-icons/bi'
const DetailCard = () => {
    const stateValue = useAppSelector((state) => state.detailCard.value)
    const dispatch = useAppDispatch()
    // modifiedData
    const modifiedData = (dragStartIndex: string, dragEndIndex: number) => {
        let tempArray = [...stateValue]
        let result = []
        for (let i = 0; i < tempArray.length; i++) {
            if (parseInt(dragStartIndex) !== i) {
                result.push(tempArray[i])
            }
        }
        result.splice(dragEndIndex, 0, tempArray[parseInt(dragStartIndex)])
        dispatch(setDetail([...result]))
    }



    const allowDrop = (event: React.DragEvent) => {
        event.preventDefault();
    }
    let dragindex: string | null = null
    const onDragStart = (e: React.DragEvent<HTMLDivElement>, ind: number) => {
        dragindex = ind.toString()
    }
    const onDrop = (key: React.DragEvent<HTMLDivElement>, dragIndex: string | null, dragEnd: number) => {
        key.preventDefault();
        if (dragIndex) {
            modifiedData(dragIndex, dragEnd)
        }
    }
    return <>{stateValue.map((value, ind) => {
        return <div key={ind}
            onDragStart={(e) => onDragStart(e, ind)}
            onDragOver={allowDrop}
            onDrop={(key) => onDrop(key, dragindex, ind)}
            draggable
            className='p-4 border border-gray-300 drop-shadow'>
            <div className='flex justify-between '>
                <span className='flex items-center'>
                    {value.status === 'detention truck' && <MdNoEncryptionGmailerrorred />}
                    {value.status === 'missing truck' && <MdWarningAmber />}
                    {value.status === 'high value shipment' && <BiRupee />}
                    {value.status}
                </span>
                <span>
                    value:{" "}{value.value}
                </span>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col'>
                    <span>Trip id : {value.tripId}</span>
                    <span>Transporter : {value.transporter}</span>
                </div>
                <div className='flex flex-col'>
                    <span>From : {value.from}</span>
                    <span>To : {value.to}</span>
                </div>
                <div className='flex flex-col'>
                    <span>Driver details</span>
                    <span>{value.driverName}({value.driverNumber})</span>
                </div>
                <div className='flex flex-col'>
                    {value.lastKnownDetail && <span>Last known details {value.lastKnownDetail}</span>}
                    {value.checkpointDetails && <span>{value.checkpointDetails}</span>}
                    {value.item && <span>{value.item}</span>}
                </div>
            </div>
            <p>
                {value.checkpointDetails}
            </p>

        </div>
    })}</>
}
export default DetailCard