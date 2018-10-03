import React from 'react';
import isEmpty from 'lodash/isEmpty';

import RegisterPhone from './RegisterPhone';

export class RegisterPhoneContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      phone: ''
    };

    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.isPhoneValid = this.isPhoneValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onPhoneChange(value) {
    this.setState({phone: value});
  }

  isPhoneValid() {
    const value = this.state.phone;
    return !isEmpty(value);
  }

  handleSubmit() {
    this.props.navigation.navigate('RegisterAddress');
  }

  render() {
    return (
      <RegisterPhone
        phone={this.state.phone}
        onPhoneChange={this.onPhoneChange}
        isSubmitEnabled={this.isPhoneValid()}
        handleSubmit={this.handleSubmit}
      />
    );
  }

}

export default RegisterPhoneContainer;
