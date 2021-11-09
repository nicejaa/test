import TransectionIM from "./components/Transection";
import FormComponents from "./components/FormComponents";
import { useState } from "react";

import './App.css'

function App() {
//classname
const design =  {backgroundColor:'red',textAlign:'center',color:'white'};

const initdata = [
  {id: 1, title: "555", amount: 200 },
  {id: 2, title: "ค่าน้ำมัน", amount: 500 },
  {id: 3, title: "ค่าเช่า", amount: 200 },
];

const [items,setItems] = useState(initdata)
// const [items,setItems] = useState([])

//Children To Parrent (Bottom-Up)
const onAddNewItem=(newItem)=>{
  console.log("ข้อมูลที่ส่งมาจาก FormComponents = ",newItem)
  setItems((prevItem)=>{
    return [newItem,...prevItem]
  })
}

//การทำ nested components
// การกำหนด style ใน   jsx
const Title = () => <h1 style={{backgroundColor:'red',textAlign:'center',color:'white'}}>โปรแกรมจัดการบัญชี</h1>;
// const Title = () => <h1 style={design}>โปรแกรมจัดการบัญชี</h1>;
const Desc = () => <p>บันทึกข้อมูลบัญชี</p>;



  return (
    <div>
      <Title/>
      <Desc/>
      <TransectionIM items={items}/>
      <FormComponents onAddItem={onAddNewItem}/>
    </div>  
  );
}



export default App;
