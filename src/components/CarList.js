import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const CarList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='registrationNumber' />
        <TextField source='model' />
        <TextField source='year' />
        <TextField source='type' />
        <EditButton basePath='/car' />
        <DeleteButton basePath='/car/delete' />
      </Datagrid>
    </List>
  )
}

export default CarList
