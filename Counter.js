import React,{Component} from "react";
class Counter extends Component{
    Constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    incrementHandler=()=>{
        this.setState({count:this.state.count+1});
    }
    decrementHandler=()=>{
        this.setState({count:this.state.count-1});
    }
    render()
    {
        return(
            <div>
                <button type="button" onClick={this.incrementHandler}>Increment</button>&nbsp;
        
                <button type="button" onClick={this.decrementHandler}>Decrement</button>&nbsp;
            </div>
        )
    }
}
export default Counter;