import React, { Component } from 'react';

class Hello extends Component {

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

    render(){
        return <div>
            Hello {this.props.name} from class component.
            <p>{this.state.user.name} Age: {this.state.age}</p>
        </div>
    }

}

export default Hello;