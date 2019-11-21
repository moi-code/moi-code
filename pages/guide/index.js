import React, { Component } from "react";
import Router from "next/router";
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
      uid,
      id
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
      uid: uid,
      id: id
    };
  }
  componentDidMount() {
    const {
      category,
      content,
      date,
      description,
      displayName,
      photoURL,
      title,
      uid,
      id
    } = this.props;
    if (
      category == undefined &&
      content == undefined &&
      date == undefined &&
      description == undefined &&
      displayName == undefined &&
      photoURL == undefined &&
      title == undefined &&
      uid == undefined &&
      id == undefined
    )
      Router.push("/moi-guides");
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
      uid,
      id
    } = this.props;
    return (
      <div id={id} className="h-100">
        <style jsx>
          {`
            .layout {
              z-index:1
              background-color: #000 !important;
            }
            .post-content{
              z-index:1
            }
          `}
        </style>
        <div className="h-100 pt-3 d-flex flex-column">
          <div>
            <a className="btn btn-outline-light" href="/moi-guides">
              back
            </a>
          </div>
          <br />
          <div className=" h-100 p-5 post-content container">
            <div className="text-center border border-white">
              <img className="mx-auto" src={photoURL} alt="Post IMG" />
            </div>

            <h1>{title}</h1>
            <h4>Written By {displayName}</h4>
            <p>{date}</p>
            <p>Category{category}</p>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }
}
