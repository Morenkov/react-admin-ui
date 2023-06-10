import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const CarCreate = (props) => {
  return (
    <Create title='Create a Car' {...props}>
      <SimpleForm>
          <TextInput source='id' />
          <TextInput source='registrationNumber' />
          <TextInput source='model' />
          <TextInput source='year' />
          <TextInput source='type' />
      </SimpleForm>
    </Create>
  )
}

export default CarCreate
