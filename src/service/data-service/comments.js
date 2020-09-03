'use strict';

const {nanoid} = require(`nanoid`);

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

  create(offer, comment) {
    offer.comments.push({id: nanoid(), text: comment});
    return comment;
  }
}

module.exports = CommentsService;
