import { Component } from "react";

class App extends Component{
    state={
        menu:[
            {id:1, name:"김밥"},
            {id:2, name:"라면"},
            {id:3, name:"떡볶이"},
            {id:4, name:"만두"},
            {id:5, name:"우동"},
        ],
        selectedList:[],    
        selected:[]
    }
    render(){
        //선택된 메뉴 목록을 업데이트하는 함수


        const result = this.state.menu.map((item)=>{
            //item은 {id:x, name:x} 형태의 object이다.
            return <label key={item.id}><input id={item.id} type="checkbox" value={item.name} onChange={(e)=>{
                if(e.target.checked){
                    this.state.selected.push(item);
                }else{
                    const index = this.state.selected.indexOf(item);
                    this.state.selected.splice(index,1);
                }
                this.setState({
                    selectedList:this.state.selected.map(item=> 
                        <li key={item.id}>
                            {item.name}
                        </li>),
                    selected:this.state.selected
                });
                console.log(this.state.selected);
            }}/>{item.name}</label>
            
        });


        return(
            <div className="container">
                <h3>먹고 싶은 분식 메뉴를 체크하세요</h3>
                {result}

                <h3>선택된 메뉴 목록</h3>
                <ul>
                    {this.state.selectedList}
                </ul>

            </div>

        );
    }


}
export default App;