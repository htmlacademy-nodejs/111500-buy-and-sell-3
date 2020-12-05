'use strict';

const {nanoid} = require(`nanoid`);

class CommentService {

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

  create(offer, comment) {
    const newComment = {id: nanoid(), text: comment};
    offer.comments.push(newComment);
    return newComment;
  }
}

module.exports = CommentService;
