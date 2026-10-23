// วางลิงก์ Google Apps Script Web App URL (.../exec) ที่นี่
const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbzvel9BYdU29BWKmeglte0081hPfY0RlJHhBxlAAkvpEfHM07IcTMvOj15fNjQrBra-/exec';

// ดึงจาก localStorage ก่อน (กรณีตั้งค่าผ่านหน้าเว็บ) หากไม่มีให้ใช้ค่า DEFAULT_API_URL ด้านบน
window.API_URL = localStorage.getItem('GAS_API_URL') || DEFAULT_API_URL;

// ค่าเริ่มต้นของโรงเรียนบ้านทุ่งขาม อ.ชะอำ จ.เพชรบุรี สพป.เพชรบุรี เขต 2
// (ซิงก์อัตโนมัติกับชีต Config เมื่อเชื่อมต่อ API แล้ว)
window.APP_CONFIG = {
  SCHOOL_NAME: 'โรงเรียนบ้านทุ่งขาม อ.ชะอำ จ.เพชรบุรี',
  SCHOOL_AFFILIATION: 'สพป.เพชรบุรี เขต 2',
  SCHOOL_LAT: 12.676513,           // พิกัดเริ่มต้น รร.บ้านทุ่งขาม ต.ไร่ใหม่พัฒนา อ.ชะอำ จ.เพชรบุรี
  SCHOOL_LON: 99.773547,
  MAX_DISTANCE: 200,               // ระยะทางที่อนุญาตให้ลงเวลาได้ (เมตร)
  CHECKIN_START_TIME: '06:30',     // ระบบเริ่มเปิดให้ลงเวลาเช้า (06:30 น.)
  START_TIME: '08:00',             // เวลาสิ้นสุดช่วงลงเวลาเช้าปกติ (หลัง 08:00 น. ระบบตัดสถานะเป็น "สาย" อัตโนมัติ)
  CHECKOUT_START_TIME: '16:30',    // ระบบเริ่มเปิดให้ลงเวลาเย็น (16:30 น. เป็นต้นไป)
  MODEL_URL: 'https://justadudewhohacks.github.io/face-api.js/models',
  MATCH_THRESHOLD: 0.55,           // ค่าความแม่นยำใบหน้า AI
  STABILIZATION_FRAMES: 5,         // จำนวนเฟรมยืนยันใบหน้าก่อนเช็คอิน/เช็คเอาท์
  REG_SAMPLES: 5                   // จำนวนช็อตในการสแกนลงทะเบียนใบหน้า 5 มิติ
};
