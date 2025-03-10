import React from 'react';

const NkpStudentDetail = ({ student, onClose }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Thông tin chi tiết</h3>
                <p><strong>Mã sinh viên:</strong> {student.nkpID}</p>
                <p><strong>Họ tên:</strong> {student.nkpStudentName}</p>
                <p><strong>Tuổi:</strong> {student.nkpAge}</p>
                <p><strong>Giới tính:</strong> {student.nkpGender}</p>
                <p><strong>Ngày sinh:</strong> {student.nkpBirthday}</p>
                <p><strong>Nơi sinh:</strong> {student.nkpBirthPlace}</p>
                <p><strong>Địa chỉ:</strong> {student.nkpAddress}</p>
                <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
            </div>
        </div>
    );
};

export default NkpStudentDetail;