import React, { Component } from "react";

class NkpStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nkpHandleView = (nkpStudent)=>{
        // Chuyển lên NkpStudentList
        this.props.onNkpHandleView(nkpStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ NkpStudentList
    let {renderNkpStudent, key} = this.props;
    console.log("Student:",renderNkpStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNkpStudent.nkpId}</td>
          <td>{renderNkpStudent.nkpStudentName}</td>
          <td>{renderNkpStudent.nkpAge}</td>
          <td>{renderNkpStudent.nkpGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.nkpHandleView(renderNkpStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NkpStudent;