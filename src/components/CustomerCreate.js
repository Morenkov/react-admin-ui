import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const CustomerCreate = (props) => {
  return (
    <Create title='Create a Customer' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput multiline source='address' />
        <TextInput source='email' />
        <TextInput source='phone' />
      </SimpleForm>
    </Create>
  )
}

export default CustomerCreate
