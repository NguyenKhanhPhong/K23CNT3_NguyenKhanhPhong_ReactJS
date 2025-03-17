import React, { useState } from 'react'

export default function NkpFormUser({onNkpAddNew}) {

    const [id, setNkpId] = useState('')
    const [nkpFullName, setNkpFullName] = useState('')
    const [nkpUserName, setNkpUserName] = useState('')
    const [nkpPass, setNkpPass] = useState('')

   

    const nkpHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,nkpFullName,nkpUserName, nkpPass)
        
        onNkpAddNew({id,nkpFullName,nkpUserName, nkpPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setNkpId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='nkpFullName' value={nkpFullName} onChange={(ev)=>setNkpFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='nkpUserName' value={nkpUserName} onChange={(ev)=>setNkpUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='nkpPass' value={nkpPass} onChange={(ev)=>setNkpPass(ev.target.value)} /> </p>

            <p>
                <button name='nkpSave' onClick={nkpHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}