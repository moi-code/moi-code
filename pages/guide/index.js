import React, { Component } from "react";
import Router from "next/router";
import Moment from "react-moment";
import { MoiButton } from "../../src/components/common";
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
      <div id={id} className="h-100 guide">
        <style jsx>
          {`
            .layout {
              z-index:1
              background-color: #000 !important;
            }
            .post-container{
              z-index: 1
            }
           .guide-border{
              border:.75rem #000 solid
            }
            .guide-img{
              z-index: 2;
              
              min-width: 19.6875rem;
            }
            .guide-img img{
              z-index: 1;
              max-height:20rem;
              object-fit: contain;
            }
            .guide-content{
              background-color: #f5deb3
            }
          `}
        </style>
        <div className="h-100 pt-3 d-flex flex-column">
          <div className=" h-100 post-container container">
            <div>
              <MoiButton btnStyle={"btn-outline-light mb-2"}>
                <a href="/moi-guides">Go Back</a>
              </MoiButton>
              {/* <a className="btn btn-outline-light mb-2" href="/moi-guides">
                Go Back
              </a> */}
            </div>
            <div className="guide-img guide-border mb-5 text-center bg-white">
              <img className="p-3" src={photoURL} alt="Post IMG" />
            </div>

            <div className="guide-content guide-border text-dark px-4 px-sm-5 py-5 my-5">
              <div className="mb-3">
                <h1>
                  {"▪ "}
                  {title}
                </h1>
                <h6>
                  By {displayName}
                  <br />
                  {"▪ "}
                  <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
                </h6>
                <p>Category: {category}</p>
              </div>
              <hr />
              <div>
                <p>
                  {content}
                  {" ▪▪▪"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
