import React from 'react'
import {Edit, SimpleForm, TextInput, EmailField, NumberField} from 'react-admin'

const CustomerEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
          <TextInput source='name' />
          <TextInput multiline source='address' />
          <EmailField source='email' />
          <NumberField source='phone' />
      </SimpleForm>
    </Edit>
  )
}

export default CustomerEdit
