import React, { Component } from 'react';
import NkpStudent from './NkpStudent';

export default class NkpStudentList extends Component {
  render() {
    let { renderNkpStudents, onNkpHandleView, onNkpHandleEdit, onNkpHandleDelete } = this.props;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {renderNkpStudents.map((student, index) => (
            <NkpStudent
              key={student.nkpID}
              nkpIndex={index + 1}
              renderNkpStudent={student}
              onNkpHandleView={onNkpHandleView}
              onNkpHandleEdit={onNkpHandleEdit}
              onNkpHandleDelete={onNkpHandleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}