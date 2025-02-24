import React from "react";

export default function NkpFuncEvent1() {

    // hàm xử lí sự kiện 
    const nkpEventButton1Click = () => {
        alert("Button 1 - Clicked");
    };

    const nkpEventButton2Click = () => {
        alert("Button 2 - Clicked");
    };

    const nkpEventButton3Click = (name) => {
            alert("Name:" + name);
    }
    return (
        <div className="">
            {/* <button className='btn btn-primary' onClick={nkpEventButton1Click}>Button1</button> */}
            <button className='btn btn-success' onClick={nkpEventButton2Click}>Button2</button>
            {/* <button className='btn btn-success' onClick={nkpEventButton3Click("Phong Nguyễn")}>Button3</button> */}
            <button className='btn btn-success' onClick={()=>nkpEventButton3Click("Phong Nguyễn Khánh")}>Button4</button>

        </div>
    )
}   