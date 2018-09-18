import React, {Component} from 'react';

class HelloUser extends Component {
    render(){
        return(
            <div>
                <p>Bom dia {this.props.name}!</p>
            </div>
        );
    };
}

export default HelloUser;