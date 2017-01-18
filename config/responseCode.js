/**
 * 응답코드 Mapper
 * Location: config/responseCode.js
 * 
 * @date 2017-01-17
 * @author 김진혁
 */

const responseCode = {
  'NO_AUTORIZATION':                      0, // 권한없음
  'REQUIRE_LOGIN':                        1, // 로그인 필요
  'GET_ARTICLE_SUCCESS':                  2, // 게시글 리스트 성공
  'GET_ARTICLE_FAIL':                     3, // 게시글 리스트 실패
  'CREATE_ARTICLE_SUCCESS':               4, // 게시글 등록 성공
  'CREATE_ARTICLE_FAIL':                  5, // 게시글 등록 실패
};

module.exports = responseCode;