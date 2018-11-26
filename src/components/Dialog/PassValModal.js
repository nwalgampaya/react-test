import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    componentDidMount() {
    const { handleModalCloseClick } = this.props;
    $(this.modal).modal('show');
    $(this.modal).on('hidden.bs.modal', handleModalCloseClick);
    }
    handleCloseClick() {
      const { handleModalCloseClick } = this.props;
      $(this.modal).modal('hide');
      handleModalCloseClick();
    }
    render() {
      return (
        <div>
          <div className="modal fade" ref={modal => this.modal = modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div className="modal-body">
            Modal Body
          </div>
          <input type="text" value={this.props.txtVal}/>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.handleCloseClick}>Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
    }
  }
  
  export default class PassValModal extends React.Component {
    constructor(props) {
      super(props);
      this.handleModalShowClick = this.handleModalShowClick.bind(this);
      this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
      this.state = {
        showModal: false,
         txtVal:"test123"
      }
    }
  
    handleModalShowClick(e) {
      e.preventDefault();
      this.setState({
        showModal: true
      })
    }
  
    handleModalCloseClick() {
      this.setState({
        showModal: false
       
      })
    }
  
    render() {
      console.log(this.state)
      const { showModal } = this.state;
      return(
        <div className="container">
          <div className="row">
            <div className="col text-center"><button type="button" className="btn btn-primary" onClick={this.handleModalShowClick}>Show Modal</button></div>
            {showModal ? (<Modal handleModalCloseClick={this.handleModalCloseClick} txtVal={this.state.txtVal} >
            
            </Modal>
            ) : null}
          </div>
        </div>
      );
    }
  }
  
//   ReactDOM.render(<App />, document.getElementById('root'));