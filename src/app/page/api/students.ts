// /pages/api/students.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { openDB } from '../../lib/db';

interface Student {
  id: number;
  name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // ใช้ openDB เพื่อดึงข้อมูลจากตาราง students
      const db = await openDB();
      db.all('SELECT id, name FROM students', [], (err: Error, rows: Student[]) => {
        if (err) {
          console.error('Error fetching students:', err);
          return res.status(500).json({ message: 'Error fetching students' });
        }
        res.status(200).json(rows);
      });
    } catch (error) {
      console.error('Error opening database:', error);
      res.status(500).json({ message: 'Error opening database' });
    }
  } else {
    // การตอบกลับเมื่อมี request method ที่ไม่รองรับ
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
