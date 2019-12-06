import types from '../types';
import Router from 'next/router';
import firebase from '../../../public/firebase/firebase.client';
import 'firebase/auth';
import 'firebase/firestore';
const { GOT_BLOG_DATA } = types;
const db = firebase.firestore();
export const getMoiBlogs = () => dispatch => {
  db.collection('Blog').onSnapshot(
    function(querySnapshot) {
      var blogs = [];
      querySnapshot.forEach(function(doc) {
        const { id } = doc;

        const blogData = {
          id,
          title: doc.data().title,
          content: doc.data().content,
          description: doc.data().description,
          category: doc.data().category,
          photoURL: doc.data().photoURL,
          date: doc.data().date,
        };
        blogs.push(blogData);
      });
      dispatch({
        type: GOT_BLOG_DATA,
        payload: { value: blogs },
      });
    },
    function(error) {
      //...
    }
  );
};
export const getMoiBlog = payload => dispatch => {
  const { category, id } = payload;

  // Router.push(
  //   `/moi-guides/${category}/${id}`
  // );
};
