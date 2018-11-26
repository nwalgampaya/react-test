import React from 'react';

export default class DocumentInputOld extends React.Component {
    render() {
      return <div>
          
          <input 
        type="text" 
        name={ `document-${ this.props.index }-document` } 
        />
         <button onClick={this.props.delEvent.bind(this)}>Delete</button>
        <br/>
        </div>;
    }
  }