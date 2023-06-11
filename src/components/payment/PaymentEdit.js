import React from 'react'
import {DateInput, Edit, NumberField, NumberInput, SimpleForm, TextInput} from 'react-admin'

const PaymentEdit = (props) => {
    return (
        <Edit title='Edit Payment' {...props}>
            <SimpleForm>
                <NumberField disabled source='id'/>
                <NumberInput source='customerId'/>
                <NumberInput multiline source='orderId'/>
                <DateInput source='paymentDate'/>
                <NumberInput source='amount'/>
                <TextInput source='paymentMethod'/>
            </SimpleForm>
        </Edit>
    )
}

export default PaymentEdit
