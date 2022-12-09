
import { Component } from "react";
import "./css/custom.css";
// 모듈화된 css 사용법
// 1. css 파일 이름에 .module.을 추가한다.
// 2. from과 함께 import 해서 사용한다
// 3. 이름은 자유롭게 선택가능
import styles from "./css/custom.module.css";


class App extends Component{
    state={
        obj:{
            color:"blue",
            backgroundColor:"yellow",
            border : "1px solid yellow"
        },
        isYellow : false
    }
    render(){

        const classes = "box bg-pink";

        return(
            <div className="container">
                <h3>css 적용 예제</h3>
                <button onClick={this.changeColor}>바꾸기</button>
                <p style={this.state.obj}>p1 입니다.</p>


                <div className="box">box</div>
                {/* 
                    jsx에서 {} 내부는
                    javascript에서 사용하는 data가 참조되어야한다
                    ex. number string object array function
                    10, 20, 30
                    "abcd", 'abcd', `abcd`
                    {key:value}
                    [val1, val2, ..]
                    function(){}, ()=>{}
                */}
                <div className="box bg-yellow">box2</div>
                <div className="box bg-pink">box3</div>
                <div className={"box bg-pink"}>box4</div>
                <div className={classes}>box5</div>
                <div className={`box bg-yellow`}>box6</div>
                <div className={`box ${true ? "bg-yellow" : ""}`}>box7</div>
                <div className={`box ${false ? "bg-yellow" : ""}`}>box8</div>
                <div className={`box ${true && "bg-yellow"}`}>box9</div>
                <div className={`box ${this.state.isYellow && "bg-yellow"}`} onClick={()=>{
                    this.setState({
                        isYellow:!this.state.isYellow

                    });

                }          
                }>Click box</div>

                <p className={styles["text-red"]}>빨간꽃</p>
                <p className={styles["text-yellow"]}>노란꽃</p>
                <p className={`${styles["text-red"]} ${styles["text-bold"]}`}>빨간 굵은 글씨</p>

            </div>

        );
    }
    changeColor = ()=>{
        this.setState({
            obj:{...this.state.obj, color:"pink", backgroundColor:"black"}
        });
        console.log(this.state.obj.color);

    };
}
export default App;