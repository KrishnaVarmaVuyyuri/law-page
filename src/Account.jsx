import React from 'react'
import { useSelector } from 'react-redux'

export default function Account() {
  let  data = useSelector((s)=>{
    return s
  })
  console.log(data)
  return (
    <>
    <div className='container'>
    <h1 className='text-primary'>Account Details</h1>
    <table  className='table '>
      <thead>
        <tr>
        <th>Name</th>
          <th>Balace</th>
          <th>Number</th>
        </tr>
          
      </thead>
      <tbody>
        <tr>
        <td>{data.user.name}</td>
        <td>{data.user.balance}</td>
        <td>{data.user.phone}</td>
        </tr>
       
      </tbody>
    </table>
    </div>
    </>
  )
}
