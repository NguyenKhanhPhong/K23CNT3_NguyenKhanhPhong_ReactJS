import React from "react";

export default function NkpJsxExpression(){
    // biến 
    const name="Nguyễn Khánh Phong";

    const user= {
        firstName:"Phong",
        lastName:"Nguyễn"
    }
    // hàm
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName ;
    }

    // Element
    const element =(
        <div>
            {/* Biểu thức jsx  */}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3>welcome to, {name}</h3>
        </div>
    );

    // hàm
    const SayWelcome = (name)=>{
        if(name){
            return <h3>Welcome to{name}</h3>
        }else{
            return <h3>welcome to Fit-NTU - K23CNT3</h3>
        }
    }
    
    return (
        <div>
            <h1>NKP - JSX Expression</h1>
            {/* sử dụng biến element  */}
            {element}

            <hr/>
            {SayWelcome()}
            <hr/>
            {SayWelcome("Đoàn Thị Ngọc Ánh")}
        </div>
    )
}