import { Component } from "react";

class App extends Component{
    state={
        isRun:false


    }
    render(){
        const myName = "kim";
        const myP = <p>p2입니다</p>;
        return(
            <div className="container">
                <h3>jsx 객체 활용하기</h3>
                {"kim"}
                <br />
                {myName}
                <br />
                <p>p1입니다</p>
                {myP}
                <h3>아래가 달려요 인지 달리지 않아요 인지 확인</h3>
                {true ? <p>달려요</p> : <p>달리지 않아요</p>}
                {this.state.isRun ? <p>달려요</p> : <p>달리지 않아요</p>}

                <h3>state 값 활용</h3>
                달리려면 체크 
                <input type="checkbox" checked={this.state.isRun} onChange={this.handleChange} />
                <br />
                {this.state.isRun ? <p>달려요</p> : <p>달리지 않아요</p>}
                <br />
                <h3>아래가 로그인 중인지 확인</h3>
                {true && <p>kim 님 로그인 중...</p>}
                <h3>아래가 로그인 중인지 확인</h3>
                {this.state.isRun && <p>kim 님 로그인 중...</p>}
                

            </div>


        );
    }
    handleChange=(e)=>{
        this.setState({
            isRun : e.target.checked
        });
        
        
    }


}
export default App;