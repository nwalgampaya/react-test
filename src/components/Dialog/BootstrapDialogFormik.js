import React from 'react';
import ReactDOM from 'react-dom';
// import { Popover, PopoverBody } from 'reactstrap';
import {Button, DropdownButton, MenuItem, Modal,  OverlayTrigger, Tooltip} from 'react-bootstrap';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
// import '../../components/site.css'  

class BootstrapDialogFormik extends React.Component {

    constructor(props, context) {
      super(props, context);
      
      // this.getValue = this.getValue.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);    
      this.handleTxtChange = this.handleTxtChange.bind(this);
      // this.handleSubmit  = this.handleSubmit.bind(this);
      this.onClick1 = this.onClick1.bind(this);
        
  
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
        selectedId:'',
        payload: null,
        inputPersonColumn:''
      };
    }
  handleTxtChange (e) {  
    console.log("handleTxt"+ e.target.value)
  //alert("txt" + e.target.value)
  // this.state.textValue= e.target.value;
    this.setState({ inputPersonColumn: e.target.value})
    
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
    // handleSubmit(){
    //   console.log("in handle submit")
    //   this.setState({ show: false });
    // }
    //  {
    //   console.log("In e)
    // }
    onClick1= () => {
      console.log("In OnClick")
      // this.setState({inputPersonColumn:'aaaa'})
      // this.form.submitForm()
    }
  
    onSubmitCallback = payload => {
      this.setState({payload})
    }
    render() {
      const {      
        values,
        errors,
        touched,
        isSubmitting
      
      } = this.props;
      let rows = this.state.data.map((person,i) => {
        console.log("in render"+ person.id)
      return <PersonRow key = {person.id} data = {person}  handleShow= {this.handleShow} />
    })

      // const popover = (
      //   <Popover id="modal-popover" title="popover">
      //     very popover. such engagement
      //   </Popover>
      // );
      const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
  
      return (
        <div>
          {/* <Form>  */}
           
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
              <Form>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* value= {}this.state.data[].name */} 
            {/* Condition for the value is needed to render the element at the the initial load */}
            {/* {this.state.selectedId=='' ? this.state.data[0].name : this.state.data[this.state.selectedId-1].name} */}
            {/* <input type="text" onChange={this.handleTxtChange}  name="inputPersonColumn" value = {this.inputPersonColumn}/> */}
            <Field type="text" name ="inputPersonColumn" />
            { touched.inputPersonColumn && errors.inputPersonColumn && <p>{errors.inputPersonColumn}</p> }
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
  
              {/* </Form> */}
            </Modal.Body>
            <Modal.Footer>
              {/* onClick={this.handleSave} */}
              <Button onClick={this.handleClose}>Close</Button>
              {/* <Button disabled={isSubmitting} >Save</Button> */}
               {/* onClick={this.handleSubmit} */}
               {/* // */}
              {/* <button  type= "submit" disabled={isSubmitting}>Save</button> */}
             {/* // */} 
             {/* onClick={this.onClick} */}
             <button >submit</button>
  
            </Modal.Footer>
          </Form>
          </Modal>

           {/* <button  type= "submit" disabled={isSubmitting}>Save</button> */}
        </div>
      );
    }
  }
  const PersonRow = (props) => {

    return (
      <tr>
        {/* <td>  <input type="text" onChange={()=> props.getValue()}/></td> */}
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

  const DialogFormikBoot = withFormik({
    


    mapPropsToValues({aodeathColumn,inputPersonColumn}) {
    
        return {
            
            aodeathColumn:'fromDb',
            // currentaodeathColumn: "testin",
            
            inputPersonColumn:inputPersonColumn||'',
        }
    },

    validationSchema: Yup.object().shape({
        
        inputPersonColumn: Yup.string().required('value is required'),
        // password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
      }),

      handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        console.log("SUBMIT formik")
        if(values.inputPersonColumn==''){
          console.log("empty inputPersonColumn ")
        }else
        console.log("NOT inputPersonColumn ")

        // setTimeout(() => {
        //   if (values.email === 'andrew@test.io') {
        //     setErrors({ email: 'That email is already taken' })
        //   } else {
        //     resetForm()
        //   }
        //   setSubmitting(false)
        // }, 2000)
      }  
})(BootstrapDialogFormik)

export default DialogFormikBoot
//   render(<Example />);