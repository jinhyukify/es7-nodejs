/**
 * 라우터 설정 파일
 * Location : router/router.js
 * 
 */
import articlesController from '../controllers/article-controller';

const router = (app) => {
  app.get('/articles', articlesController.getArticleList);
  app.get('/articles/:id', articlesController.showArticle);
  app.post('/articles', articlesController.createArticle);
  //app.put('/articles/:id', articlesController.updateArticle);
  //app.delete('/articles/:id', articlesController.deleteArticle);
}

module.exports = router;