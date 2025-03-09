import React, { Component } from "react";
import NkpControl from "./components/NkpControl";
import NkpStudentList from "./components/NkpStudentList";
import NkpForm from "./components/NkpForm";

class NkpApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nkpStudents:[
        {nkpId:"SV001",nkpStudentName:"Nguyễn Khánh Phong",nkpAge:19,nkpGender:"Nam",nkpBirthday:"31/-7/2005",nkpBirthPlace:"HN", nkpAddress:"abcxyz"},
        {nkpId:"SV002",nkpStudentName:"Chu Nguyên Chương",nkpAge:188,nkpGender:"Nữ",nkpBirthday:"25/05/1179",nkpBirthPlace:"HP", nkpAddress:"Trung quốc"},
        {nkpId:"SV003",nkpStudentName:"Tần Thủy Hoàng",nkpAge:55,nkpGender:"Nam",nkpBirthday:"25/05/1079",nkpBirthPlace:"TpHCM", nkpAddress:"Trung Quốc"},
        {nkpId:"SV004",nkpStudentName:"Hoàng Thùy Linh",nkpAge:55,nkpGender:"Nam",nkpBirthday:"25/05/1079",nkpBirthPlace:"TpHCM", nkpAddress:"Hồ chí minh"},
      ],
      nkpStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  nkpHandleView = (nkpStudent)=>{
    this.setState({
      nkpStudent:nkpStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.nkpStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Trịnh Văn Chung - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NkpControl  />
                {/* danh sách sinh vien  */}
                <NkpStudentList  renderNkpStudents={this.state.nkpStudents} onNkpHandleView={this.nkpHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NkpForm  renderNkpStudent = {this.state.nkpStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NkpApp;