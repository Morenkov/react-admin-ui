import React from 'react'
import {Datagrid, DateField, DeleteButton, EditButton, List, NumberField, TextField,} from 'react-admin'

const ReviewList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <NumberField source='id' />
        <NumberField multiline source='customerId'/>
        <NumberField source='orderId'/>
        <TextField source='reviewText'/>
        <NumberField source='rating'/>
        <DateField source='reviewDate'/>
        <EditButton basePath='/review' />
        <DeleteButton basePath='/review' />
      </Datagrid>
    </List>
  )
}

export default ReviewList
