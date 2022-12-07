// App03.js

import { Component } from "react";

class App03 extends Component{
    render(){
        const names=[];
        names.push(<li key={0}>kim</li>);
        names.push(<li key={1}>lee</li>);
        names.push(<li key={2}>park</li>);

        //jsx 객체를 만들어낼 아이템이 배열에 준비되어 있다고 가정하자
        const animals=["dog", "cat", "monkey", "tiger"];

        //만들어낼 jsx 객체를 저장할 빈 배열을 만든다
        const result=[];
        for(let i=0; i<animals.length;i++){
            result.push(<li key={i} > {animals[i]} </li>)
        }

        const result2= animals.map((item,index)=>{
            return <li key={index}> {item}</li>

        });

        return(
            <div className="container">
                <h3>반복문 돌면서 여러개의 문서객체 만들기</h3>
                <ul>
                    {names}
                </ul>
                <h3>동물 목록</h3>
                <ul>
                    {result}
                </ul>
                <h3>동물 목록2</h3>
                <ul>
                    {result2}
                </ul>
            </div>

        );
    }
}
export default App03