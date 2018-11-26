import React from 'react';

const User = (props) => {
  let age = props.age >=0 ? props.age : "NA";
  if(props.children){
    return (<div>

      <li>
      <span>  name: {props.children} | age: {age}</span>
      <input onChange={props.changeEvent} value={props.children}/>
      <button onClick={props.delEvent}>Delete</button>
      </li>
    </div>
    )
  } else {
    return(<li>Invalid Entry</li>)
  }
}

// export default User;
// export default class DocumentInput extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   deleteUser = (index, e) => {
 
//   }
//   render() {
//     // const User = (props) => {
//     return <div>
        
//         <li>
//       {/* <span>  name: {props.children} | age: {age}</span> */}
//       {/* <input onChange={props.changeEvent} value={props.children}/> */}
//       <button onClick={props.delEvent}>Delete</button>
//       {/* <button onClick={this.deleteUser}>Delete</button> */}
//       </li>
//       </div>;
//   }
// }
export default User;
