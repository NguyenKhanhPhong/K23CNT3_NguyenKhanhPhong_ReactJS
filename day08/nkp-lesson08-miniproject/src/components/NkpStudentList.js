import React, { Component } from "react";
import NkpStudent from "./NkpStudent";

class NkpStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    nkpHandleView = (nkpStudent)=>{
        // Chuyển dữ liệu lên NkpApp
        this.props.onNkpHandleView(nkpStudent);
    }


  render() {
    // lấy dữ liệu trong props từ NkpApp chuyển xuống
    let {renderNkpStudents} = this.props;
    console.log("List:",renderNkpStudents);
    
    // chuyển dữ liệu vào NkpStudent để hiển thị
    let nkpElementStudent = renderNkpStudents.map((nkpItem,index)=>{
        return <NkpStudent key={index} renderNkpStudent={nkpItem} onNkpHandleView={this.nkpHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {nkpElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NkpStudentList;