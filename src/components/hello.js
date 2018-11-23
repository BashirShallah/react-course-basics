import React, { Component } from 'react';

class Hello extends Component {

    constructor(props){
        super(props);

        this.increase = this.increase.bind(this);
    }

    state = {
        age: 15,
        user: {
            name: "bashir",
            lastName: "shallah"
        },
        socialLinks: [
            "facebook",
            "twitter"
        ]
    }

    decrement = () => {
        this.setState({age: this.state.age - 1});
    }

    increase(){
        this.setState({age: this.state.age + 1});
    }

    render(){
        return <div>
            Hello {this.props.name} from class component.
            <p>{this.state.user.name} Age: {this.state.age}</p>
            <button onClick={()=>{this.setState({age: this.state.age + 1}) }}>Increase</button>
            <button onClick={this.decrement}>Decrease</button>
            <button onClick={this.increase}>Increase with function</button>
        </div>
    }

}

export default Hello;