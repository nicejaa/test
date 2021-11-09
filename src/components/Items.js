import "./Items.css";
import PropTypes from 'prop-types'; // validation library
const Items = (props) => {
    const {title,amount} = props
    //สามารถเอา title,amount {} ไปใส่แทน props ตรง parameter ได้เลย
    const status = amount<0 ? "expense":"income" 
                            // ? True : false  if condition ย่อ
  return (
    <div>
      <li className={status}>
        {title}  ราคา {amount}
      </li>
    </div>
  );
};
Items.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
}
export default Items;
