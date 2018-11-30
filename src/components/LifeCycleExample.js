import React, { Component } from 'react';

class LifeCycleExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time: new Date
            });
        }, 1000);
    }

    render(){
        return <div>
            Time is {this.state.time.toLocaleTimeString()}
        </div>
    }

}

export default LifeCycleExample;