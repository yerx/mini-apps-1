import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }


      // shipToAddressLine1: '',
      // shipToAddressLine2: '',
      // shipToAddressCity: '',
      // shipToAddressState: '',
      // shipToAddressZipCode: '',
      // phoneNumber: '',
      // creditCard: '',
      // expiryDate: '',
      // CVV: '',
      // billingZipCode: ''

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value)
    console.log('name', event.target.name.value)
    alert('form submitted');
    // console.log(this.state.name, this.state.email, this.state.password);
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.value)
    // console.log('name', event.target.name.value)
    // this.setState({
    //   name: event.target.name.value,
    //   email: event.target.email.value,
    //   password: event.target.password
    // })
  }

  handleClickNext() {
    alert('next button clicked')
  }


  render() {
    return (

      <div>
          <Form1
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClickNext={this.handleClickNext} />

      </div>

    )
  }
}

// form 1

const Form1 = ({handleChange, handleClickNext, handleSubmit}) => {

  return (
    <div>
      <h3>Enter Account Information</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" className="name" onChange={handleChange} />
        </label>
        <label>Email:
          <input type="text" className="email" onChange={handleChange} />
        </label>
        <label>Password:
          <input type="text" className="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <button type="button" onClick={handleClickNext}>Next</button>
      </form>
    </div>

  )
}

// form 2
// const Form1 = ({handleChange, handleClickNext, handleSubmit}) => {

//   return (
//     <div>
//       <h3>Enter Shipping Address</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Name:
//           <input type="text" onChange={handleChange} />
//         </label>
//         <label>Email:
//           <input type="text" onChange={handleChange} />
//         </label>
//         <label>Password:
//           <input type="text" onChange={handleChange} />
//         </label>
//         <button type="button" onClick={handleClickNext}>Next</button>
//       </form>
//     </div>

//   )
// }

// // form 3
// const Form1 = ({handleChange, handleClickNext, handleSubmit}) => {

//   return (
//     <div>
//       <h3>Enter Account Information</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Name:
//           <input type="text" onChange={handleChange} />
//         </label>
//         <label>Email:
//           <input type="text" onChange={handleChange} />
//         </label>
//         <label>Password:
//           <input type="text" onChange={handleChange} />
//         </label>
//         <button type="button" onClick={handleClickNext}>Next</button>
//       </form>
//     </div>

//   )
// }


export default App;


