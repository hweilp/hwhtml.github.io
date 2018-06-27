var express = require('express');
var router = express.Router();
var WebPageCtrl = require('../controller/WebPageCtrl');
var ApiCtrl = require('../controller/ApiCtrl');


/*
 * 中间件
 * */
// let {ComData, Auth} = require("../middleware");
var ComData = require('../middleware/com');
var Auth = require('../middleware/auth');
var UploadMidd = require('../middleware/multer');

// 导入全局中间件
router.use(ComData);


router.use(function (req,res,next){
  next();
});

//webPage
router.get('/', WebPageCtrl.IndexPage);
router.get('/register', WebPageCtrl.RegisterPage);
router.get('/login', WebPageCtrl.LoginWebPage);
router.get('/user/list', WebPageCtrl.UserListPage);
router.get('/user/detail', WebPageCtrl.UserDetailPage);
router.get('/upload', WebPageCtrl.UploadPage);

// api
router.post('/api/register', ApiCtrl.Register);
router.get('/api/login', ApiCtrl.Login);
router.get('/api/user/list', ApiCtrl.UserList);
router.get('/api/user/detail/:id', ApiCtrl.UserDetail);
router.post('/api/user/delete', ApiCtrl.UserDelete);
router.post('/api/user/edit', ApiCtrl.UserEdit);

router.post('/api/upload', UploadMidd.single('file'),  ApiCtrl.FileUpload);

router.get('/api/banner', ApiCtrl.GetBannerWeb);
// router.get('/api/personal_recommend', Auth, ApiCtrl.getPersonal);
router.get('/api/personal_recommend', ApiCtrl.getPersonal);
router.get('/api/lastest_release', ApiCtrl.getLastest);
router.get('/api/friendship_link', ApiCtrl.getFriendshipLink);
router.get('/api/technical_label', ApiCtrl.getTechnicalLabel);
router.get('/api/hot_articles', ApiCtrl.getHotArticles);




router.get('*', WebPageCtrl.ErrorPage);


module.exports = router;