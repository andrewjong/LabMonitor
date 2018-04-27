import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';

/**
 * This the page for the user to input the lab information
 */
class StartPage extends Component {
  render() {
    return (
      <Grid centered>
        <Form >
          <Form.Field onsubmit="return validateForm()" method="post">
            <p> Set Contact Information to be displayed in website </p>
            <label>First Name</label>
            <input placeholder='First Name'
            />
          </Form.Field>

          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>

          <p> Input email and phone number to enter if nodes detect non-nominal behavior </p>

          <Form.Field onsubmit="return validateForm()" method="post">
            <label>Email Address</label>
            <input type="email" id="mail" name="mail" placeholder='email' />
          </Form.Field>


          <Form.Field >
            <label>Phone Number</label>
            <input placeholder='10 digits' />
          </Form.Field>

          <Button type='submit' color="primary">Submit</Button>
        </Form>
      </Grid>
    )
  }
}

export default StartPage;