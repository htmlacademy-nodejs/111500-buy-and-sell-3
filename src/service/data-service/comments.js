'use strict';

class CommentsService {

  getAll(offer) {
    return offer.comments;
  }
  delete(offer, commentId) {
    const comment = offer.comments.find((i) => i.id === commentId);
    if (!comment) {
      return null;
    }
    offer.comments.filter((i) => i.id === commentId);
    return comment;
  }
}

module.exports = CommentsService;
