import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton, TextInput, EmailField, NumberField,
} from 'react-admin'

const CustomerList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextInput source='name' />
        <TextInput multiline source='address' />
        <EmailField source='email' />
        <NumberField source='phone' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default CustomerList
