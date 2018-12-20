import React from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="comment">
            <div>id: {this.props.id}</div>
            <div>project_id: {this.props.project_id}</div>
            <div>userName: {this.props.userName}</div>
            <div>comment: {this.props.comment}</div>
            <div>times: {this.props.times}</div>
        </div>
        
        );
    }
}
export default Comment;