import React, { Component } from 'react';

export default class NkpStudent extends Component {
  render() {
    let { renderNkpStudent, nkpIndex, onNkpHandleView, onNkpHandleEdit, onNkpHandleDelete } = this.props;

    return (
      <tr>
        <td>{nkpIndex}</td>
        <td>{renderNkpStudent.nkpID}</td>
        <td>{renderNkpStudent.nkpStudentName}</td>
        <td>{renderNkpStudent.nkpAge}</td>
        <td>{renderNkpStudent.nkpGender}</td>
        <td>
          <button className="btn btn-info btn-sm me-2" onClick={() => onNkpHandleView(renderNkpStudent)}>Xem</button>
          <button className="btn btn-warning btn-sm me-2" onClick={() => onNkpHandleEdit(renderNkpStudent)}>Sửa</button>
          <button className="btn btn-danger btn-sm" onClick={() => onNkpHandleDelete(renderNkpStudent.nkpID)}>Xóa</button>
        </td>
      </tr>
    );
  }
}