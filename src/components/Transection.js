import Items from "./Items";

const Transection = (props) => {
  const {items} = props
  return (
    <div>
      <ul>
       
        {items.map((element) => {
        //   return <Items {{title={element.title} amount={element.amount}}} />; //เขียนแบบปกติ
          return <Items  {...element} key={element.id}/>; //spered operator ทำให้ title amount ใน data เป็น property และไม่ต้องกำหนดชื่อ property ซ้ำ
        })}
      </ul>
    </div>
  );
};
export default Transection;
