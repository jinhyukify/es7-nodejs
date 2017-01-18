import responseCode from '../config/responseCode';

/**
 * 리스폰스 함수
 * @param res, code, status
 */
const responseByCode = (res, code, status = 200) => {
  res.status(status).json({code});
}

module.exports = {
  responseByCode
}