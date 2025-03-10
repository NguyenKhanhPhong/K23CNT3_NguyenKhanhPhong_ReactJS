import React, { Component } from 'react';
import NkpControl from './components/NkpControl';
import NkpStudentList from './components/NkpStudentList';
import NkpForm from './components/NkpForm';
import NkpStudentDetail from './components/NkpStudentDetail';

class NkpApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nkpStudents: [
        { nkpID: "SV001", nkpStudentName: "Nguyễn Khánh Phong", nkpAge: 19, nkpGender: "Nam", nkpBirthday: "31/07/2005", nkpBirthPlace: "HN", nkpAddress: "Gia Lâm" },
        { nkpID: "SV002", nkpStudentName: "ádsasd", nkpAge: 19, nkpGender: "Nam", nkpBirthday: "05/11/2005", nkpBirthPlace: "QN", nkpAddress: "Yên Xá" },
        { nkpID: "SV003", nkpStudentName: "zxcxzxc", nkpAge: 19, nkpGender: "Nam", nkpBirthday: "04/09/2005", nkpBirthPlace: "HD", nkpAddress: "Hải Dương" },
        { nkpID: "SV004", nkpStudentName: "qưeqwe", nkpAge: 20, nkpGender: "Nam", nkpBirthday: "13/01/2005", nkpBirthPlace: "HD", nkpAddress: "Yên Xá" },
        { nkpID: "SV005", nkpStudentName: "Tádasd", nkpAge: 20, nkpGender: "Nữ", nkpBirthday: "10/01/2005", nkpBirthPlace: "HCM", nkpAddress: "Long Thành" }
      ],
      filteredStudents: [],
      selectedStudent: null,
      showDetail: false,
      isAddingNew: false,
      searchKeyword: ''
    };
  }

  componentDidMount() {
    this.setState({ filteredStudents: this.state.nkpStudents });
  }

  // 🔎 Xử lý tìm kiếm sinh viên theo tên
  onNkpHandleSearch = (keyword) => {
    this.setState({ searchKeyword: keyword }, this.filterStudents);
  };

  // Hàm lọc danh sách sinh viên dựa vào từ khóa tìm kiếm
  filterStudents = () => {
    const { nkpStudents, searchKeyword } = this.state;
    const filtered = nkpStudents.filter(student =>
      student.nkpStudentName.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    this.setState({ filteredStudents: filtered });
  };

  // 🔎 Xử lý khi bấm "Xem"
  onNkpHandleView = (nkpStudent) => {
    this.setState({
      selectedStudent: nkpStudent,
      showDetail: true,
      isAddingNew: false
    });
  };

  // ❌ Xử lý khi bấm "Đóng"
  onNkpHandleCloseDetail = () => {
    this.setState({ showDetail: false });
  };

  // ✏️ Xử lý khi bấm "Sửa"
  onNkpHandleEdit = (nkpStudent) => {
    this.setState({ selectedStudent: nkpStudent, showDetail: false, isAddingNew: false });
  };

  // 🗑 Xử lý khi bấm "Xóa"
  onNkpHandleDelete = (studentID) => {
    this.setState(prevState => {
      const updatedStudents = prevState.nkpStudents.filter(student => student.nkpID !== studentID);
      return { nkpStudents: updatedStudents, showDetail: false };
    }, this.filterStudents);
  };

  // ✅ Cập nhật sinh viên sau khi chỉnh sửa
  onNkpHandleUpdate = (updatedStudent) => {
    this.setState(prevState => {
      const updatedStudents = prevState.nkpStudents.map(student =>
        student.nkpID === updatedStudent.nkpID ? updatedStudent : student
      );
      return { nkpStudents: updatedStudents, selectedStudent: null, isAddingNew: false };
    }, this.filterStudents);
  };

  // 🆕 Xử lý khi bấm "Thêm mới"
  onNkpHandleAddNew = () => {
    this.setState({
      selectedStudent: null,
      showDetail: false,
      isAddingNew: true
    });
  };

  // 🆕 Xử lý khi lưu sinh viên mới
  onNkpHandleSaveNew = (newStudent) => {
    this.setState(prevState => ({
      nkpStudents: [...prevState.nkpStudents, newStudent],
      selectedStudent: null,
      isAddingNew: false
    }), this.filterStudents);
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Nguyễn Khánh Phong - K23CNT3 - Mini Project</h1>
        <section className='container-fluid mt-3'>
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <NkpControl
                  onNkpHandleAddNew={this.onNkpHandleAddNew}
                  onNkpHandleSearch={this.onNkpHandleSearch}
                />
                <NkpStudentList
                  renderNkpStudents={this.state.filteredStudents}
                  onNkpHandleView={this.onNkpHandleView}
                  onNkpHandleEdit={this.onNkpHandleEdit}
                  onNkpHandleDelete={this.onNkpHandleDelete}
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {this.state.showDetail ? (
                <NkpStudentDetail
                  student={this.state.selectedStudent}
                  onClose={this.onNkpHandleCloseDetail}
                />
              ) : (
                <NkpForm
                  renderNkpStudent={this.state.selectedStudent}
                  onNkpHandleUpdate={this.onNkpHandleUpdate}
                  onNkpHandleSaveNew={this.onNkpHandleSaveNew}
                  isAddingNew={this.state.isAddingNew}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NkpApp;