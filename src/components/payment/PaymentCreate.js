import React from 'react'
import {Create, DateInput, NumberInput, SimpleForm, TextInput} from 'react-admin'

const PaymentCreate = (props) => {
    return (
        <Create title='Create a Payment' {...props}>
            <SimpleForm>
                <NumberInput source='customerId'/>
                <NumberInput multiline source='orderId'/>
                <DateInput source='paymentDate'/>
                <NumberInput source='amount'/>
                <TextInput source='paymentMethod'/>
            </SimpleForm>
        </Create>
    )
}

export default PaymentCreate
