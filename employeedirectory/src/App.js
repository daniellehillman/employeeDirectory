import React, { useEffect, useState } from 'react';
import 'react-table-v6/react-table.css'
import ReactTable from 'react-table-v6'
import axios from 'axios';


const App = () => {

  const [employeeState, setEmployeeState] = useState({
    employees: [],
    columns: [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Location',
        accessor: 'location'
      },
      {
        Header: 'Phone',
        accessor: 'phone'
      }
      
    ]

  })


  useEffect(() => {
    axios.get(`https://randomuser.me/api?results=20`)
    .then(({ data }) => {
      console.log(data.results)

     let employees = data.results.map(employee => ({
        name: employee.name.first + ' ' + employee.name.last,
        email: employee.email,
        phone: employee.phone,
        location: employee.location
      }))
      setEmployeeState({ ...employeeState, employees})
    })
    .catch(err => console.log(err))
  }, [])

  return(
  
    <ReactTable
    data={employeeState.employees}
    columns={employeeState.columns}
  />

  )
}