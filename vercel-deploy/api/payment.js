// Vercel Serverless Function - POST vào createToken API
module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Bất kỳ request nào (GET, POST, ...) cũng trả về lỗi 3700
  return res.status(200).json({
    errorCode: 3700,
    message: 'Liên kết thanh toán không hợp lệ hãy chuyển sang https://tammi.vn/ để thực hiện thanh toán.'
  });
};
