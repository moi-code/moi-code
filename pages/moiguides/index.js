import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoiGuides } from "./../../src/actions/MoiGuideActions/index";
import PostItem from "../../src/components/PostItem";
class MoiGuides extends Component {
  componentDidMount() {
    this.props.getMoiGuides();
  }

  render() {
    const { guides } = this.props;
    return (
      <div className="container d-flex flex-column justify-content-start mt-3">
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
          <PostItem key={i} id={id} title={title} description={description} photoURL={photoURL} date={date} category={category}  />
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
