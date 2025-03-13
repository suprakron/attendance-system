'use client';
import React, { useEffect, useState } from 'react';
import styles from './Attendance.module.css';

const AttendancePage = () => {
  const [students, setStudents] = useState<{ id: number, name: string }[]>([]);
  const [status, setStatus] = useState<string>('✅');
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);

  useEffect(() => {
    // ดึงข้อมูลนักเรียนจาก API
    const fetchStudents = async () => {
      try {
        const response = await fetch('/api/students');
        const data = await response.json();
        setStudents(data);
        if (data.length > 0) setSelectedStudent(data[0].id); // กำหนดนักเรียนแรกเป็นตัวเลือกเริ่มต้น
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async () => {
    if (selectedStudent !== null) {
      try {
        // ส่งข้อมูลไปยัง API เพื่อบันทึกสถานะ
        await fetch('/api/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ studentId: selectedStudent, status }),
        });
        alert('บันทึกสถานะสำเร็จ');
      } catch (error) {
        console.error('Error submitting attendance:', error);
      }
    } else {
      alert('กรุณาเลือกนักเรียน');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>บันทึกการเช็คชื่อ</h1>
      <div className={styles.layout}>
        {/* แถบชื่อของนักเรียนด้านซ้าย */}
        <div className={styles.studentList}>
          <ul>
            {students.map((student) => (
              <li
                key={student.id}
                className={selectedStudent === student.id ? styles.selected : ''}
                onClick={() => setSelectedStudent(student.id)}
              >
                {student.name}
              </li>
            ))}
          </ul>
        </div>

        {/* ตารางบันทึกสถานะการเช็คชื่อ */}
        <div className={styles.tableContainer}>
          <table className={styles.attendanceTable}>
            <thead>
              <tr>
                <th>ชื่อ</th>
                <th>สถานะ</th>
                <th>บันทึก</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{students.find(student => student.id === selectedStudent)?.name}</td>
                <td>
                  <select value={status} onChange={handleStatusChange} className={styles.select}>
                    <option value="✅">มา (🟢)</option>
                    <option value="❌">ขาด (🔴)</option>
                    <option value="🏥">ลา (🟡)</option>
                    <option value="⏳">มาสาย (🟠)</option>
                  </select>
                </td>
                <td>
                  <button type="button" onClick={handleSubmit} className={styles.submitButton}>บันทึก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
