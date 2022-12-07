// App03.js

import { Component } from "react";

class App extends Component{
    state={
        index:0,
        msgs:[]    
    };
    render(){


        return(
            <div className="container">
                <h3>문서 객체 동적으로 만들기</h3>
                <input type="text" onKeyUp={this.handleKeyUp}/>
                <ul>
                    {this.state.msgs}
                </ul>
            </div>

        );
    }
    //input 요소에 keyup 이벤트가 일어날때마다 호출되는 함수
    handleKeyUp=(e)=>{
        console.log(e);
        //만약 enter key를 누른다면
        if(e.keyCode==13){
            let msg = e.target.value;
            //아래와 같이 배열에 아이템을 추가한다고 해서 UI가 update되지 않는다.
            //this.state.msgs.push(<li>msg</li>);

            //아이템이 추가된 새로운 배열을 얻어내서 setState() 해야된다
            let newArray = this.state.msgs.concat(<li key={this.state.index}>{msg}</li>);
            this.setState({
                msgs:newArray,   
                index:this.state.index+1
            });
        }
    }
}
export default App;