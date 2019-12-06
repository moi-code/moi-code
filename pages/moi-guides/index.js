import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoiGuides } from "../../src/actions/MoiGuideActions/index";
import PostItem from "../../src/components/PostItem";
class MoiGuides extends Component {
  static async getInitialProps({ query }) {
    return { query: query };
  }
  render() {
    const { query } = this.props;
    return (
      <div className="container d-flex flex-column justify-content-start pt-3 h-100">
        {query.guides.map((guide, i) => {
          const { id, title, description, category, photoURL, date } = guide;
          return (
            <PostItem
              key={i}
              id={id}
              title={title}
              description={description}
              photoURL={photoURL}
              date={date}
              category={category}
            />
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
