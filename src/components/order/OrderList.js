import React from 'react'
import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  FilterList,
  FilterListItem,
  FilterLiveSearch,
  List,
  NumberField,
  SavedQueriesList,
  TextField,
} from 'react-admin'
import {Card, CardContent} from "@mui/material";

const OrderList = (props) => {
  return (
    <List aside={<PostFilterSidebar />} {...props}>
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

export const PostFilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        <SavedQueriesList />
        <FilterLiveSearch />
        <FilterList label="Fields" >
          <FilterListItem label="Parsel" value={{ order: 'parcelId' }} />
          <FilterListItem label="Driver" value={{ order: 'customerId' }} />
          <FilterListItem label="Customer" value={{ order: 'customerId' }} />
          <FilterListItem label="OrderDate" value={{ order: 'orderDate' }} />
          <FilterListItem label="Status" value={{ order: 'status' }} />
        </FilterList>
      </CardContent>
    </Card>
);
export default OrderList
