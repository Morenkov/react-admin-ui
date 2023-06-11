import React from 'react'
import {Datagrid, DateField, DeleteButton, EditButton, List, NumberField, TextField,} from 'react-admin'

const OrderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source='id' />
        <NumberField multiline source='parcelId'/>
        <NumberField source='driverId'/>
        <NumberField source='customerId'/>
        <DateField source='orderDate'/>
        <TextField source='status'/>
        <EditButton basePath='/order' />
        <DeleteButton basePath='/order' />
      </Datagrid>
    </List>
  )
}

export default OrderList
