import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//การสร้าง Components แบบ funtion
function HelloComponets(){
  return <h1>สวัสดี Componets</h1>
}

//การสร้าง Componets แบบ Class
class HelloClassComponets extends React.Component{
  render(){
    return <h1>สวัสดี Class Componets</h1>
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
