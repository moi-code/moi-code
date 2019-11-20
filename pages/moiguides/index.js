import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoiGuides } from "./../../src/actions/MoiGuideActions/index";
class MoiGuides extends Component {
  componentDidMount() {
    this.props.getMoiGuides();
  }

  render() {
    const { guides } = this.props;
    return (
      <div className="container h-100 d-flex flex-column justify-content-start mt-3">
        {guides.map((guide, i) => {
          const {
            id,
            title,
            content,
            description,
            category,
            photoURL,
            date
          } = guide;
          return (
            <div key={i} id={id} className="postItem d-flex flex-row border border-dark my-3" onClick={()=>{}} >
              <style jsx>{`
          .postItem{
            height 10.75rem;
          }
          `}</style>
              <div className="d-flex flex-column justify-content-between h-100">
                <img
                  className="h-100 border-right border-dark mr-3 p-2"
                  src={photoURL}
                  alt="User Profile Picture"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h3> {title} </h3>
                <p>{description}</p>

                <p>{date}</p>
                <p>{category}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  guides: state.MoiGuideReducer.guides
});
export default connect(mapStateToProps, { getMoiGuides })(MoiGuides);
