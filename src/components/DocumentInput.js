import React from 'react';

export default class DocumentInput extends React.Component {
  deleteUser(id) {
   this.props.deleteUser(id);
    
} 
  
  render() {
      return 
      
      <div>
      <input 
        type="text" 
        name={ `document-${ this.props.index }-document` } 
        />
      {
        
         this.props.data.map(el=>
             <p onClick={this.deleteUser.bind(this, el)}>{el}</p>
         )
      }

       </div>
      {/*<div>
          
          <input 
        type="text" 
        name={ `document-${ this.props.index }-document` } 
        />
         <button onClick={this.props.delEvent.bind(this)}>Delete</button>
        <br/>
        </div>; */}
      }
  }