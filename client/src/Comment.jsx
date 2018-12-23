import React from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){

        let time=new Date(this.props.commentObj.times).toString();

        return (
        <div className="comment">
            {/* <div>id: {this.props.commentObj.id}</div> */}
            {/* <div>project_id: {this.props.commentObj.project_id}</div> */}
            <div className="username">{this.props.commentObj.username}:</div>
            <div className="message">==>{this.props.commentObj.comment}</div>
            <div className="timestamp">Posted:{time}</div>
        </div>
        
        );
    }
}
export default Comment;