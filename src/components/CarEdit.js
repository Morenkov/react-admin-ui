import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const CarEdit = (props) => {
  return (
    <Edit title='Edit Car' {...props}>
      <SimpleForm>
          <TextInput disabled source='id' />
          <TextInput source='registrationNumber' />
          <TextInput source='model' />
          <TextInput source='year' />
          <TextInput source='type' />
      </SimpleForm>
    </Edit>
  )
}

export default CarEdit
