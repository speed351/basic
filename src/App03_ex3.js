//App03_ex3.js

import FriendComponent from "./components/FriendComponent";
import { Component } from "react";

class App extends Component{
    state={
        orgin_list:["kim","lee","park"]
    }
    render(){
        /*

        */
        return(
            <div className="container">
                <h3>자식 component 사용 예제</h3>
                    <FriendComponent friends={this.state.orgin_list}
                        deleteClicked={this.deleteClicked}
                        updateClicked={this.updateClicked}
                    />

            </div>

        );
    }

    deleteClicked = (idx) =>{
            console.log(idx+"의 아이템 삭제");
            // this.state.friends 배열에서 인덱스를 제외한 새로운 배열을 얻어낸다.
            let newArray = this.state.orgin_list.filter((item,index)=>{
                
                return index !== idx;
            });
            this.setState({orgin_list:newArray});
        }
    updateClicked = (idx , newName)=>{
            console.log(idx+"의 아이템 수정");
            // this.state.friends 배열에서 인덱스를 제외한 새로운 배열을 얻어낸다.
            let newArray = this.state.orgin_list.map((item,index)=>{
                if(index === idx){
                    return newName;
                }else
                    return item;
            });
            this.setState({orgin_list:newArray});
        }
    

}
export default App;