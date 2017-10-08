import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { submitForm } from '../actions';
import CompanyForm from './CompanyForm';

class Container extends React.Component {
  constructor(props){
    super(props);

    this.submitFormValues = this.submitFormValues.bind(this);
  }

  submitFormValues(values) {
     const action = submitForm(values);
     this.props.dispatch(action);
  }

  render() {
    return(
      <div>
        <CompanyForm onSubmit={this.submitFormValues} />
      </div>
    );
  }
}

const FormContainer = connect()(Container)
export default FormContainer;
