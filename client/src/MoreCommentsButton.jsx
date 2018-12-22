import React from 'react';

class MoreCommentsButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){


        if(!this.props.commentsButtonClicked){
            return(<button onClick={this.props.buttonClick}>More Comments</button>);
        } else {
            return (<button onClick={this.props.buttonClick}>Shrink Comments</button>);
        } 
    }
}

export default MoreCommentsButton;
