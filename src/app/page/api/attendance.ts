// /pages/api/attendance.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { openDB } from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { studentId, status } = req.body; // รับข้อมูล studentId และ status จาก request

    try {
      // เปิดการเชื่อมต่อฐานข้อมูล
      const db = await openDB();

      // บันทึกสถานะการเช็คชื่อ
      await new Promise<void>((resolve, reject) => {
        db.run('INSERT INTO attendance (student_id, status, date) VALUES (?, ?, ?)', 
          [studentId, status, new Date().toISOString()],
          (err) => {
            if (err) {
              reject('Error inserting attendance data');
            } else {
              resolve();
            }
          }
        );
      });

      res.status(200).json({ message: 'Attendance recorded successfully' });
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).json({ message: 'Error recording attendance' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
