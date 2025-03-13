import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="../page/dashboard">แดชบอร์ด</Link></li>
        <li><Link href="../page/student-list">รายชื่อนักเรียน</Link></li>
        <li> <Link href="../page/attendance">Attendance</Link></li>
        <li><Link href="../page/report">รายงาน</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
