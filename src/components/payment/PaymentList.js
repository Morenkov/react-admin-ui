import React from 'react'
import {Datagrid, DateField, DeleteButton, EditButton, List, NumberField, TextField,} from 'react-admin'

const PaymentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source='id' />
        <NumberField source='customerId'/>
        <NumberField multiline source='orderId'/>
        <DateField source='paymentDate'/>
        <NumberField source='amount'/>
        <TextField source='paymentMethod'/>
        <EditButton basePath='/payment' />
        <DeleteButton basePath='/payment' />
      </Datagrid>
    </List>
  )
}

export default PaymentList
