import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import axios from 'axios';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            commentsList: [],
            project_id: ''
        }
    }

    componentDidMount(){
       
        axios.get('/Comments')
        .then(function (response) {
          console.log('RESPONSE:',response);
          })
        .catch(function (error) {
          console.log(error);
        });   
    }
    



    render(){
        return (
        <div>
            <div className="input">Input Bar:
                <Comment commentsList={this.state.commentsList}/>
            </div>

            <div className="ouput">Existing Comments </div>
        </div>
        
        );
    }
}

ReactDOM.render( <App/>,document.getElementById('Comments'));

export default App;