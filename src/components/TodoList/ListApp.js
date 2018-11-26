import React from 'react';
import ReactDOM from 'react-dom';


export default class ListApp extends React.Component{
    constructor(){
       super();
       this.state = {
         data: [5]
       }
       this.delete = this.delete.bind(this);
       this.add = this.add.bind(this);
    }
    
    delete(id){
       this.setState(prevState => ({
           data: prevState.data.filter(el => el != id )
       }));
    }
    
    add() {
        // const documents = this.state.documents.concat(DocumentInputOld);
      const data = this.state.data.concat( <Child  delete={this.delete} data={this.state.data}/> )
        this.setState({ data });
      }
    render(){
       return(
           <div>

        <button onClick={ this.add }>Add</button>
           <Child delete={this.delete} data={this.state.data}/>
           {/* <div className="inputs">
          { this.state.documents }
        </div> */}
        <br/>
           </div>
       );
    }
 }
 
 class Child extends React.Component{
 
    delete(id){
        this.props.delete(id);
    }
    
    render(){
       return(
          <div>
            {
               this.props.data.map(el=>
                <div><input type="text" name={ `document-${ this.props.index }-document` } 
        />
                {/* <button onClick={this.delete.bind(this, el)}>Delete</button> */}
                    <p onClick={this.delete.bind(this, el)}>{el}</p>
</div>
            )
        }
          </div>
       )
    }
 }
 
//  ReactDOM.render(<ListApp/>, document.getElementById('app'))