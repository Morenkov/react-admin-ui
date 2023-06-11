import React from 'react'
import {DateInput, Edit, NumberField, NumberInput, SimpleForm, TextInput} from 'react-admin'

const OrderEdit = (props) => {
    return (
        <Edit title='Edit Order' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <NumberInput multiline source='parcelId'/>
                <NumberInput source='driverId'/>
                <NumberInput source='customerId'/>
                <DateInput source='orderDate'/>
                <TextInput source='status'/>
            </SimpleForm>
        </Edit>
    )
}

export default OrderEdit
