import React, { Component } from 'react';
import {Form, Grid, Table, Button } from 'semantic-ui-react'

const StartPage = () => (
<div>

<Grid centered>
    <Form>
    <Form.Field>
<p> Set Contact Information to be displayed in website </p>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>

    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>

<p> Input email and phone number to enter if nodes detect non-nominal behavior </p>
    <Form.Field>
      <label>Email Address</label>
      <input placeholder='email' />
    </Form.Field>


    <Form.Field>
      <label>Phone Number</label>
      <input placeholder='Phone Number' />
    </Form.Field>
    
    <Button type='submit'>Submit</Button>
  </Form>
  </Grid>
  </div>
)

export default StartPage