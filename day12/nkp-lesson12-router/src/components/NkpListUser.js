import React from 'react'

export default function NkpListUser({renderNkpUsers}) {

    const nkpElements = renderNkpUsers.map((nkpItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{nkpItem.id}</td>
                    <td>{nkpItem.nkpFullName}</td>
                    <td>{nkpItem.nkpUserName}</td>
                    <td>{nkpItem.nkpPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {nkpElements}
            </tbody>
        </table>
    </div>
  )
}