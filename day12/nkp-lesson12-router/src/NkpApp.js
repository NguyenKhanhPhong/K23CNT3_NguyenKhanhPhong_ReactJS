import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NkpNavNar from './components/NkpNavNar'
import NkpHome from './components/NkpHome'
import NkpAbout from './components/NkpAbout'
import NkpContact from './components/NkpContact'
import NkpListUser from './components/NkpListUser'
import NkpFormUser from './components/NkpFormUser'
export default function NkpApp() {

  const listUsers  = [
    {id:"SV001", nkpFullName:"Nguyễn Khánh Phong", nkpUserName:"PhongPhong", nkpPass:"123456a@"},
    {id:"SV002", nkpFullName:"Nguyễn Khánh A", nkpUserName:"AA", nkpPass:"123456a@"},
    {id:"SV003", nkpFullName:"Nguyễn Khánh B", nkpUserName:"BB", nkpPass:"123456a@"},
  ]

  const[nkpUsers, setNkpUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const nkpHandleAdd = (nkpParam)=>{
    console.log("nkpHandleAdd:", nkpParam);
    
    setNkpUsers(prev =>{ 
      return [
        ...prev,
        nkpParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Nguyễn Khánh Phong - K23CNT3]</h1>
        <hr/>
        <Router>
            <NkpNavNar />
            <Routes>
                <Route path='/' element = {<NkpHome />} />
                <Route path='/about' element = {<NkpAbout />} />
                <Route path='/contact' element = {<NkpContact />} />
                <Route path='/list-user' element = {<NkpListUser  renderNkpUsers={nkpUsers}/>} />
                <Route path='/create-user' element = {<NkpFormUser  onNkpAddNew={nkpHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}