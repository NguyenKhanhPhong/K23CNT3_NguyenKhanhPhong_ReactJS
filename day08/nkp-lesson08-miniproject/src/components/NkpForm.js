import React, { Component } from 'react';

export default class NkpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nkpID: '',
      nkpStudentName: '',
      nkpAge: '',
      nkpGender: 'Nam',
      nkpBirthday: '',
      nkpBirthPlace: 'HN',
      nkpAddress: ''
    };
  }

  // Cập nhật form khi nhận dữ liệu từ props
  componentDidUpdate(prevProps) {
    if (prevProps.renderNkpStudent !== this.props.renderNkpStudent) {
      if (this.props.renderNkpStudent) {
        this.setState({ ...this.props.renderNkpStudent });
      } else {
        // Nếu đang ở chế độ "Thêm mới", reset form
        this.setState({
          nkpID: '',
          nkpStudentName: '',
          nkpAge: '',
          nkpGender: 'Nam',
          nkpBirthday: '',
          nkpBirthPlace: 'HN',
          nkpAddress: ''
        });
      }
    }
  }

  // Xử lý thay đổi dữ liệu input
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Gửi dữ liệu khi nhấn "Lưu"
  handleSubmit = (event) => {
    event.preventDefault();
    const { nkpID, ...otherState } = this.state;

    if (!nkpID || nkpID.trim() === "") {
        alert("Vui lòng nhập mã sinh viên (nkpID).");
        return;
    }

    if (this.props.isAddingNew) {
        this.props.onNkpHandleSaveNew({ nkpID, ...otherState });
    } else {
        this.props.onNkpHandleUpdate({ nkpID, ...otherState });
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.isAddingNew ? "Thêm sinh viên mới" : "Chỉnh sửa thông tin"}</h3>
          <form onSubmit={this.handleSubmit}>

            {/* Nhập mã sinh viên khi thêm mới */}
            {this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="nkpID" value={this.state.nkpID} onChange={this.handleChange} required />
                </div>
              </div>
            )}

            {/* Hiển thị mã sinh viên nhưng không cho sửa khi chỉnh sửa */}
            {!this.props.isAddingNew && (
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="nkpID" value={this.state.nkpID} readOnly />
                </div>
              </div>
            )}

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="nkpStudentName" value={this.state.nkpStudentName} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="number" className="form-control" name="nkpAge" value={this.state.nkpAge} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="nkpGender" value={this.state.nkpGender} onChange={this.handleChange}>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input type="date" className="form-control" name="nkpBirthday" value={this.state.nkpBirthday} onChange={this.handleChange} required />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" name="nkpBirthPlace" value={this.state.nkpBirthPlace} onChange={this.handleChange}>
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                  <option value="HD">Hải Dương</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" name="nkpAddress" value={this.state.nkpAddress} onChange={this.handleChange} required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">{this.props.isAddingNew ? "Thêm" : "Lưu"}</button>
          </form>
        </div>
      </div>
    );
  }
}