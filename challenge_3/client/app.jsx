import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForm: 1,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      shipToAddressLine1: '',
      shipToAddressLine2: '',
      shipToAddressCity: '',
      shipToAddressState: '',
      shipToAddressZipCode: '',
      phoneNumber: '',
      creditCard: '',
      expiryDate: '',
      CVV: '',
      billingZipCode: ''
    }



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    alert('form submitted');
    // return promise resolve to create a chain event
    // post data to database
    // get data from database
    // take the data and render it to the summary form component


  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClickNext() {
    let currentForm = this.state.currentForm;
    currentForm++;
    this.setState({currentForm: currentForm});
    console.log(this.state.currentForm);
  }


  render() {
    return (

      <div>
          <Form1
          currentForm={this.state.currentForm}
          handleChange={this.handleChange}
          handleClickNext={this.handleClickNext} />
          <Form2
          currentForm={this.state.currentForm}
          handleChange={this.handleChange}
          handleClickNext={this.handleClickNext} />
          <Form3
          currentForm={this.state.currentForm}
          handleChange={this.handleChange}
          handleClickNext={this.handleClickNext}
          handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

// form1
const Form1 = ({currentForm, handleChange, handleClickNext}) => {
  if (currentForm !== 1) {
    return null;
  }

  return (
    <div>
      <h3>Enter Account Information</h3>
      <form>
        <label>First name:
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            required />
        </label>
        <label>Last name:
          <input
            type="text"
            name="lastName"
            onChange={handleChange} />
        </label>
        <label>Email:
          <input
          type="email"
          name="email"
          onChange={handleChange} />
        </label>
        <label>Password:
          <input
          type="text"
          name="password"
          onChange={handleChange} />
        </label>
        <button
          type="button"
          onClick={handleClickNext}>Next</button>
      </form>

    </div>

  )
}

// form 2
const Form2 = ({currentForm, handleChange, handleClickNext}) => {
  if (currentForm !== 2) {
    return null;
  }

  return (
    <div>
      <h3>Enter Shipping Address</h3>
      <form>
        <label>Address Line 1:
          <input
          type="text"
          name="shipToAddressLine1"
          onChange={handleChange} />
        </label>
        <label>Address Line 2:
          <input
          type="text"
          name="shipToAddressLine2"
          onChange={handleChange} />
        </label>
        <label>City:
          <input
          type="text"
          name="shipToAddressCity"
          onChange={handleChange} />
        </label>
        <label>State:
          <input
          type="text"
          name="shipToAddressState"
          onChange={handleChange} />
        </label>
        <label>Zip Code:
          <input
          type="text"
          name="shipToAddressZipCode"
          onChange={handleChange} />
        </label>
        <label>Phone Number:
          <input
          type="text"
          name="phoneNumber"
          onChange={handleChange} />
        </label>
        <button
        type="button"
        onClick={handleClickNext}>Next</button>
      </form>
    </div>

  )
}

// // form 3
const Form3 = ({currentForm, handleChange, handleClickNext, handleSubmit}) => {
  if (currentForm !== 3) {
    return null;
  }

  return (
    <div>
      <h3>Enter Billing Information</h3>
      <form onSubmit={handleSubmit}>
        <label>Credit Card #:
          <input
          type="text"
          name="creditCard"
          minlength="10"
          maxlength="10"
          onChange={handleChange} />
        </label>
        <label>Expiration Date:
          <input type="date"
          name="expiryDate"
          onChange={handleChange} />
        </label>
        <label>CVV:
          <input
          type="text"
          name="CVV"
          minlength="3"
          maxlength="3"
          onChange={handleChange} />
        </label>
        <label>Billing Zip Code:
          <input type="text"
          name="billingZipCode"
          minlength="5"
          maxlength="5"
          onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>

  )
}


export default App;


