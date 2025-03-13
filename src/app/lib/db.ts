// /lib/db.ts
import sqlite3 from 'sqlite3';

export const openDB = (): Promise<sqlite3.Database> => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database('./attendance.db', (err) => {
      if (err) {
        reject('Error opening database');
      } else {
        resolve(db); // คืนค่าฐานข้อมูลเมื่อเชื่อมต่อสำเร็จ
      }
    });
  });
};
