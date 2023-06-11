import React from 'react'
import {Datagrid, DeleteButton, EditButton, List, NumberField, TextField,} from 'react-admin'

const CarList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source='id' />
        <TextField source='registrationNumber' />
        <TextField source='model' />
        <NumberField source='year' />
        <TextField source='type' />
        <EditButton basePath='/car' />
        <DeleteButton basePath='/car' />
      </Datagrid>
    </List>
  )
}

export default CarList
