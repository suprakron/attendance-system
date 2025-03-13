// /app/page.tsx (หน้าแรก)
import { FC } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1>ยินดีต้อนรับสู่ระบบการเช็คชื่อ</h1>
    </div>
  );
};

export default HomePage;
