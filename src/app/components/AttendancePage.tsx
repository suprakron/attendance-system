const AttendancePage = () => {
    return (
      <div>
        <h2>บันทึกการเช็คชื่อ</h2>
        <table>
          <thead>
            <tr>
              <th>ชื่อ</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>สมชาย</td>
              <td>
                <button>✅ มา</button>
                <button>❌ ขาด</button>
                <button>🏥 ลา</button>
                <button>⏳ มาสาย</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button>บันทึก</button>
      </div>
    );
  };
  
  export default AttendancePage;
  