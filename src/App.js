import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import CustomerList from './components/CustomerList'
import CustomerCreate from './components/CustomerCreate'
import CustomerEdit from './components/CustomerEdit'
import CarList from './components/CarList'
import CarCreate from './components/CarCreate'
import CarEdit from './components/CarEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://77.105.28.121:8080')}>
      <Resource
        name='customer'
        list={CustomerList}
        create={CustomerCreate}
        edit={CustomerEdit}
      />
      <Resource
        name='car'
        list={CarList}
        create={CarCreate}
        edit={CarEdit}
      />
    </Admin>
  )
}

export default App
