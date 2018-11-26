import React from 'react';
import DocumentInput from './components/DocumentInput.js'
import User from './components/User.js'
export default class DocumentsFieldSet extends React.Component{
    constructor(props){
      super(props);
  
      this.state = { 
        documents: []
      }
      
      this.add = this.add.bind(this);
    }
  
    deleteUser = (index, e) => {
        console.log(index)
        //const users = [...this.state.users];
        const documents = Object.assign([], this.state.documents);
        documents.splice(index, 1);
        this.setState({ documents: documents });
        // this.state.users = users;
      }
    add() {
      // const documents = this.state.documents.concat(DocumentInput);
    const documents = this.state.documents.concat( this.state.documents)
      this.setState({ documents });
    }
    
    render () {
      // var index=0;
      // const documents = this.state.documents.map((Element, index) => {
      //   console.log("index" + index)
      //   return <Element
      //   // deleteUser={this.deleteUser.bind(this, index)}
      //   delEvent={this.deleteUser.bind(this, index)}
      //   key={ index } index={ index } 
      //   />
      // });
  
      return <div>
        <button onClick={ this.add }>Add</button>
        <DocumentInput deleteUser={this.deleteUser} data={this.state.documents}/>
        <div className="inputs">
          { this.state.documents }
        </div>
      </div>
    }
    
    
    /* {
      this.state.users.map((user, index) => {
        return (<div><User
          delEvent={this.deleteUser.bind(this, index)}
          age={user.age}
          changeEvent={this.changeUserName.bind(this, user.id)}
          key={user.id} >{user.name}</User></div>)
          {/*key is to avoid the warning*/ 
          // {/* }) */}
          // {/* }  */}
          //   ReactDOM.render(
            //     <DocumentsFieldSet />,
            //     document.getElementById('container')
            //   );
          }