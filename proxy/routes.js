const router = require("express").Router();
const HeroPlayerController = require("../HeroPlayer/server/controller.js")
const CommentsController = require("../CommentSection/server/controller.js");
const FooterController = require("../FooterPlayer/server/controller.js");

router.route("/heroPlayer").get(HeroPlayerController.fetch);

router
  .route("/comments")
  .get(CommentsController.fetchAllComments)
  .post(CommentsController.createOneComment)
  .delete(CommentsController.eraseOneComment);

router.route("/users").get(CommentsController.fetchAllUsers);

router.route("/replies").get(CommentsController.fetchAllCommentReplies);

router.route("/songs").get(FooterController.fetch);

module.exports = router;
