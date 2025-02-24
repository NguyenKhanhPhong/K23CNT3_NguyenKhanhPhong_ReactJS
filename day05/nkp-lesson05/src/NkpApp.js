import React, { Component } from 'react';
import NkpFuncEvent1 from './components/NkpFuncEvent1';

class NkpApp extends Component {
    render(){
        return(
            <div className='container border mt-3'>
                <h1 className='text-center alert alert-info my-2'>Nguyễn Khánh Phong - K23CNT3 - event and form</h1>
                <hr/>
                <h2>Function - Component - event</h2>
                <NkpFuncEvent1/>
            </div>
            <div>
                
            </div> 
        );
    }
}

export default NkpApp;