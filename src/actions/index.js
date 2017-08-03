import * as ActionTypes from '../actionTypes/actions';
//select book is an action creator, it will need an action type
export function selectBook(book) {
  return {
    type: ActionTypes.BOOK_SELECTED,
    payload: book,
  }
    //You should create a Type and Payload for your Action here
  }
