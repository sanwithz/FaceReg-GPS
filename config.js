// วางลิงก์ Google Apps Script Web App URL (.../exec) ที่นี่
const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbzvel9BYdU29BWKmeglte0081hPfY0RlJHhBxlAAkvpEfHM07IcTMvOj15fNjQrBra-/exec';

// ดึงจาก localStorage ก่อน (กรณีตั้งค่าผ่านหน้าเว็บ) หากไม่มีให้ใช้ค่า DEFAULT_API_URL ด้านบน
window.API_URL = localStorage.getItem('GAS_API_URL') || DEFAULT_API_URL;

// ค่าเริ่มต้นพิกัดโรงเรียนและระบบ (ซิงก์อัตโนมัติกับชีต Config เมื่อเชื่อมต่อ API แล้ว)
window.APP_CONFIG = {
  SCHOOL_LAT: 17.211246,
  SCHOOL_LON: 102.4470575,
  MAX_DISTANCE: 120,        // ระยะทางที่อนุญาตให้ลงเวลาได้ (เมตร)
  START_TIME: '08:00',      // หลังเวลานี้ระบบตัดสถานะเป็น "สาย" อัตโนมัติ
  MODEL_URL: 'https://justadudewhohacks.github.io/face-api.js/models',
  MATCH_THRESHOLD: 0.55,    // ค่าความแม่นยำใบหน้า AI
  STABILIZATION_FRAMES: 5,  // จำนวนเฟรมยืนยันใบหน้าก่อนเช็คอิน/เช็คเอาท์
  REG_SAMPLES: 5            // จำนวนช็อตในการสแกนลงทะเบียนใบหน้า 5 มิติ
};
