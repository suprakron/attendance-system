const StudentList = () => {
    return (
      <div>
        <h2>รายชื่อนักเรียน</h2>
        <table>
          <thead>
            <tr>
              <th>ชื่อ</th>
              <th>สถานะ</th>
              <th>ดูประวัติ</th>
            </tr>
          </thead>
          <tbody>
            {/* รายชื่อนักเรียน */}
            <tr>
              <td>สมชาย</td>
              <td>มา</td>
              <td><button>ดูประวัติ</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StudentList;
  