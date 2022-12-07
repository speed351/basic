
import { Component } from 'react';
import './App.css';


class App extends Component{
  render(){
    let myName="Park";
    return(
      <div>
        <h1>index page</h1>
        {/* myName이라는 변수 안에 있는 내용 사용하기 */}
        <p>my name is <strong>{myName}</strong></p>
        <button className="btn btn-primary" onClick={()=>{
          alert("버튼을 눌렀넹");

        }}>Click!!</button>
      </div>

    );
  }


}

export default App;
