import { useState } from 'react'
import './FormComponents.css'
import { v4 as uuidv4 } from 'uuid';


const FormComponents=(props)=>{
    const [title,setTitle] = useState('') // การกำหนด useState Format = [name,function] = useState(defalut Value)
    const [amount,setAmount] = useState(0)


    const inputTitle=(event)=>{
      setTitle(event.target.value)
    }
    const inputAmount=(event)=>{
      setAmount(event.target.value)
    }
    const saveItem=(event)=>{
        event.preventDefault();
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" value={title} placeholder="ระบุชื่อรายการ" onChange={inputTitle} />
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" value={amount} placeholder="ระบุจำนวนเงิน" onChange={inputAmount} />
                </div>
                <div>
                    <button className="btn" type="submit">เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponents