import React from 'react';
import ReactDom from 'react-dom';
import { TextField } from 'redux-form-material-ui';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import LoadingBar from 'react-redux-loading-bar';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import FileFileUpload from 'react-material-icons/icons/file/file-upload';
import FileInput from 'react-file-input';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import Logo from '../logo/ConnectIn.jpg';
import { uploadImage } from '../actions';
import { Field, reduxForm } from 'redux-form';

class CompanyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      file: '',
      open: false,
      showLoadingBar: false
    };

    this.onFileSelect = this.onFileSelect.bind(this);
    this.upload = this.upload.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.hideLoadingBar = this.hideLoadingBar.bind(this);
  }

  onFileSelect(event) {
    this.setState({
        file: event.target.files[0]
      });
  }

  upload() {
    if(this.state.file) {
      this.props.actions.showLoading();
      const action = uploadImage(this.state.file)
      this.props.dispatch(action); //store's dispatch() method
    this.setState({ showLoadingBar:true});
   }
  }

  hideLoadingBar() {
    if(this.state.showLoadingBar && this.props.isImageUploaded){
      this.props.actions.hideLoading();
      this.setState({showLoadingBar: false});
    }
  }

  openDialog(){
    this.setState({
      open: true
    })
  }

  handleClose(){
    this.setState({
      open: false
    })

  }

  render() {
    const { handleSubmit, isSubmitted, isImageUploaded } = this.props;
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ]
      if(isImageUploaded){
        setTimeout(this.hideLoadingBar,100)
      }
    return(
        <Paper className="paperContent row center" zDepth={5}>
          <div>
            <LoadingBar  style={{ backgroundColor: 'blue', height: '5px' }}/>
            <img src={Logo}></img>
          </div>
            <div className="column center">
            <form onSubmit={handleSubmit}>
              <Subheader className="letsConnect">Let&#39;s ConnectIn!!</Subheader>
              <div>
                <Field
                   name="companyName"
                   component={TextField}
                   floatingLabelText="Company Name"
                   hintText="Enter Company Name"
                />
              </div>
              <div>
                <Field
                   name="companyDesc"
                   component={TextField}
                   hintText="Company Description"
                   rowsMax={2}
                   multiLine={true}
                   underlineShow={true}
                />
              </div>
              <div className="row">
                <FileInput
                  name="myImage"
                  accept=".png,.gif,.jpg"
                  placeholder="My Image"
                  className="fileInput"
                  onChange={this.onFileSelect} />
                <FlatButton onClick={this.upload}>
                  <FileFileUpload />
                </FlatButton>
              </div>
              <RaisedButton onClick={this.openDialog} primary
                type="submit"
                label="Submit"
               >
               {isSubmitted &&
                <Dialog
                   actions={actions}
                   open={this.state.open}
                   onRequestClose={this.handleClose}
                   >
                    Submitted Successfully!
                </Dialog>
              }
            </RaisedButton>
            </form>
          </div>
        </Paper>
    );
  }
}

CompanyForm.propTypes = {
  actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  console.log(state)
  if( state.companyForm && state.companyForm.isSubmitted ) {
    return {
      isSubmitted: state.companyForm.isSubmitted
    }
  }
if(state.companyForm && state.companyForm.isImageUploaded ) {
    return {
     isImageUploaded: state.companyForm.isImageUploaded
    }
  }
  return {
    isSubmitted: false,
    isImageUploaded: false
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ showLoading, hideLoading }, dispatch),
})

CompanyForm = reduxForm({
    form: 'companyForm',
    fields: [
      'companyName',
      'companyDesc',
    ]
})(CompanyForm);

export default connect(mapStateToProps,mapDispatchToProps)(CompanyForm)
