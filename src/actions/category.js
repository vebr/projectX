import { Firebase, FirebaseRef } from '../lib/firebase';

/**
  * Get Categories
  */

 export function setError(message) {
    return dispatch => new Promise(resolve => resolve(dispatch({
      type: 'CATEGORIES_ERROR',
      data: message,
    })));
  }

 export function getCategories() {
    if (Firebase === null) return () => new Promise(resolve => resolve());
  
    return dispatch => new Promise(resolve => FirebaseRef.child('categories')
      .on('value', (snapshot) => {
        const categories = snapshot.val() || [];
        return resolve(dispatch({
          type: 'CATEGORIES_REPLACE',
          data: categories,
        }));
      })).catch(e => console.log(e));
  }
  