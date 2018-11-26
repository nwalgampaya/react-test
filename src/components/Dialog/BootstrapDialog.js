import React from 'react';
import ReactDOM from 'react-dom';
// import { Popover, PopoverBody } from 'reactstrap';
import {Button, DropdownButton, MenuItem, Modal,  OverlayTrigger, Tooltip} from 'react-bootstrap';
// import '../../components/site.css'  

export default class BootstrapDialog extends React.Component {

    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);    
        this.handleTxtChange = this.handleTxtChange.bind(this);
  
      this.state = {
        data: [{
          id: 1,
          name: "Simon Bailey"
        }, {
          id: 2 ,
          name: "Thomas Burleson"
        }],
      
        show: false,
        textValue:'test123',
        selectedId:''
      };
    }
  handleTxtChange (e) {  
  //alert("txt" + e.target.value)
  // this.state.textValue= e.target.value;
  this.setState({ textValue: e.target.value})
    
    }
    handleClose() {
      this.setState({ show: false });
    }
    handleSave() {    
    alert("Saving" + this.state.data[this.state.selectedId-1].name)
     this.setState({ show: false });
    }
  
    handleShow(id) {
      console.log("in handleShow"+  id )
      this.setState({ show: true });
      this.state.selectedId=id
      console.log("in handleShow selectedId ;"+  this.state.selectedId )
    }
    // hs= () =>{
    //   this.setState({ show: true });
    // }
  
    
    render() {

      let rows = this.state.data.map((person,i) => {
        console.log("in render"+ person.id)
      return <PersonRow key = {person.id} data = {person}  handleShow= {this.handleShow}/>
    })

      // const popover = (
      //   <Popover id="modal-popover" title="popover">
      //     very popover. such engagement
      //   </Popover>
      // );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          <p>Click to get the full Modal experience!</p>
  
          <table>
            <tbody>
                { rows }
         
            </tbody> 
        </table>

          {/* <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            Launch demo modal
          </Button> */}
  
          <Modal show={this.state.show} onHide={this.handleClose} keyboard={false} selectedid={this.state.selectedId}>
          
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* value= {}this.state.data[].name */} 
            {/* Condition for the value is needed to render the element at the the initial load */}
            <input type="text" onChange={this.handleTxtChange}  value = {this.state.selectedId=='' ? this.state.data[0].name : this.state.data[this.state.selectedId-1].name}/>
              <h4>Text in a modal</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
  
              <h4>Tooltips in a modal</h4>
              <p>
                there is a{' '}
                <OverlayTrigger overlay={tooltip}>
                  <a href="#tooltip">tooltip</a>
                </OverlayTrigger>{' '}
                here
              </p>
  
              <hr />
  
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
              <Button onClick={this.handleSave}>Save</Button>
  
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  const PersonRow = (props) => {

    return (
      <tr>
        <td>
          { props.data.id }
        </td>
        <td>
          { props.data.name }
        </td>
        <td>
        {/* { ()=>  (this.show=true)     } */}
         
         <Button  bsSize="small" onClick={()=> props.handleShow(props.data.id)} >
             Edit
           </Button>
              {/* <a href="http://localhost:3000"> test </a> */}
        </td>
      </tr>
    );
    // <a href="no-javascript.html" title="Get some foo!" id="foo">Edit</a>
  }
//   render(<Example />);