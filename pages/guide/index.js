import React, { Component } from "react";
import firebase from "../../public/firebase/firebase.client";
import "firebase/auth";
import "firebase/firestore";
const db = firebase.firestore();
export default class extends Component {
  static getInitialProps({
    query: {
      category,
      content,
      date,
      description,
      displayName,
      photoURL,
      title,
      uid
    }
  }) {
    return {
      category: category,
      content: content,
      date: date,
      description: description,
      displayName: displayName,
      photoURL: photoURL,
      title: title,
      uid: uid
    };
  }

  render() {
    const {
      category,
      content,
      date,
      description,
      displayName,
      photoURL,
      title,
      uid
    } = this.props;
    return (
      <div id={uid} className='h-100'>
        <img src={photoURL} alt="Post IMG" />
        <h1>{title}</h1>
        <h4>By {displayName}</h4>
        <p>{date}</p>
        <p>{category}</p>
        <p>{content}</p>
        <br/>
        <a className='btn btn-outline-dark' onClick={()=>{
          window.history.back();
        }}>back</a>
      </div>
    );
  }
}
