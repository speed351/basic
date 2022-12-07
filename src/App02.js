//App02.js

import { Component } from "react";

class App02 extends Component{
    //상태값(state) 정의하기
    state={
        info:"x:0,y:0",
        info2:"x:0,y:0"
    };

    render(){

        const boxStyle={
            width:"100px",
            height : "100px",
            border : "1px solid red",
            //여러단어로 구성된 속성은 camel case로 사용
            backgroundColor:"yellow"
        };
        return(
            <div className="container">
                <h3>mouse event </h3>
                {/* 
                    이벤트 리스너에 전달되는 이벤트 객체는 react가 넣어주는 이벤트 객체이다
                    original 이벤트 객체를 사용하고 싶다면 e.nativeEvent를 사용하면 된다.
                */}
                <div style={boxStyle} onMouseMove={(e)=>{
                    console.log(e);
                    let info=`x:${e.clientX}, y:${e.clientY}`;
                    this.setState({info:info});
                }}>booxx</div>

                <p>{this.state.info}</p>

                {/* 이벤트 처리를 할 함수 미리 만들어놓고 이벤트 리스너 함수 등록하기 */}
                <div style={boxStyle} onMouseMove={this.handleMouseMove}></div>
                <p>{this.state.info2}</p>
            </div>
        );
    }
    //mousemove 이벤트를 처리할 함수
    handleMouseMove = (e) => {
        let info=`x:${e.clientX}, y:${e.clientY}`;
        //여기서 this가 App2 Component를 참조하게 하려면, 이 함수는 화살표함수로 만들어져 있어야 한다.
        this.setState({info2:info});
    }
}
export default App02;