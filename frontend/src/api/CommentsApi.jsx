import Api from "./Api";

class CommentsApi {
  getAllComments() {
    return Api.get("/comments");
  }

  getCommentById(id) {
    return Api.get("/comments/" + id);
  }

  getCommentByQuestionId(questionId) {
    return Api.get("/comments?questionId=" + questionId);
  }

  createComment(commentData) {
    return Api.post("/comments", commentData);
  }

  deleteComment(id) {
    return Api.delete("/comments/" + id);
  }
}

export default new CommentsApi();
