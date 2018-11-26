import React from 'react';
import ReactDOM from 'react-dom';
import { Popover, PopoverBody } from 'reactstrap';
import {Button, DropdownButton, MenuItem, Modal,  OverlayTrigger, Tooltip} from 'react-bootstrap';
import ModalExample from './ModalExample';


export default class TriggerModalExample extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            open: false,
        }

        this.handleShowAddCancer=this.handleShowAddCancer.bind(this)
        // this.openModal=this.openModal.bind(this)
    }
    
    handleShowAddCancer(){
        console.log("in handleShow"   )
        // this.setState({ show: false });
        // this.setState({ showAddCancer: true });
        // this.state.selectedId=id
        // console.log("in handleShow selectedId ;"+  this.state.selectedId )
        // this.setState({ open: true });
        
         

              return( <ModalExample />)
         
        
      }

    render(){
return(
<Button  bsSize="small"  onClick={this.handleShowAddCancer}>
                   Add Cancer
                 </Button>
    // this.handleShowAddCancer()
)
    }
}

