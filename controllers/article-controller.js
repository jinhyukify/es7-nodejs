/**
 * Article Controller
 * Location : controllers/article-controller.js
 * @date : 2017-01-17
 * @author: 김진혁
 */
import Article from '../models/article-model';
import { responseByCode } from '../helpers/helper';
import code from '../config/responseCode';



/**
 * 게시글 목록 리스트 함수
 * GET : /articles
 * @param:  none
 * @date 2017-01-17
 */
async function getArticleList (req, res) {
  try {
    const result = await Article.find().sort({_id: -1}).limit(10)
    res.json({code: code.GET_ARTICLE_SUCCESS, data: result});
  }
  catch (err) {
    responseByCode(res, code.GET_ARTICLE_FAIL, 500);
    console.log(err);
    throw err;
  }
}

/**
 * 게시글 등록 함수
 * POST : /articles
 * @param:  title, content
 * @date 2017-01-17
 */
async function createArticle (req, res) {
  let article;

  article = new Article();
  article.title = req.body.title;
  article.content = req.body.content;

  try {
    const result = await article.save()
    res.json({code: code.CREATE_ARTICLE_SUCCESS, _id: result._id});
  }
  catch (err) {
    responseByCode(res, code.CREATE_ARTICLE_FAIL, 500);
    console.log(err);
    throw err;
  }
}

/**
 * 게시글 보기 함수
 * GET : /articles/:id
 * @param: id
 * @date 2017-01-17
 */
async function showArticle(req, res) {
  let id;

  id = req.params.id;

  try {
    const result = await Article.findById(id);
    res.json({code: code.GET_ARTICLE_SUCCESS, data: result});
  }
  catch (err) {
    responseByCode(res, code.GET_ARTICLE_FAIL, 500);
    console.log(err);
    throw err;
  }
}

module.exports = {
  getArticleList,
  createArticle,
  showArticle
};