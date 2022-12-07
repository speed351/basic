
import { Component } from 'react';
import './App.css';


class App extends Component{
  render(){
    let myName="Park";

    //요소에 적용할 인라인 css를 object로 정의하고 적용할 수 있다.
    const boxStyle={
      width:"100px",
      height : "100px",
      border : "1px solid red",
      //여러단어로 구성된 속성은 camel case로 사용
      backgroundColor:"yellow"
    };

    return(
      <div>
        <h1>index page</h1>
        {/* myName이라는 변수 안에 있는 내용 사용하기 */}
        <p>my name is <strong>{myName}</strong></p>

        {/* on다음 이벤트명을 camel case로 추가할 수 있다. */}
        <button className="btn btn-primary" onClick={()=>{
          alert("버튼을 눌렀넹");
        }}>Click!!</button>
        {/* css가 정의된 object를 이용해서 inline css를 적용시킬수가 있다. */}
        <div style={boxStyle}>box</div>
      </div>
      
    );
  }


}

export default App;
