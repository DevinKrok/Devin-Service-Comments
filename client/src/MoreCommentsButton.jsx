import React from 'react';

const styleCommentsButton = {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    marginLeft: '100px',
    font: 'bold 13px arial, helvetica, sans-serif',
    padding: '10px 10px',
    borderRadius: '10%',
    backgroundColor: '#FFADFF',
} 

class MoreCommentsButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){


        if(!this.props.commentsButtonClicked){
            return(<button className="commentsButton" onClick={this.props.buttonClick} style={styleCommentsButton}>More Comments</button>);
        } else {
            return (<button className="commentsButton" onClick={this.props.buttonClick} style={styleCommentsButton}>Shrink Comments</button>);
        } 
    }
}

export default MoreCommentsButton;
