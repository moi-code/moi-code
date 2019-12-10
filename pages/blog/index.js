import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoiBlogs } from '../../src/actions/MoiBlogActions/index';
import PostItem from '../../src/components/PostItem';
class Blog extends Component {
  static async getInitialProps({ query }) {
    return { query: query };
  }

  render() {
    const { query } = this.props;

    return (
      <div className="container d-flex flex-column justify-content-start pt-3 h-100">
        {query.blogs.map((blog, i) => {
          const { id, title, description, category, photoURL, date } = blog;
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
  blogs: state.MoiBlogReducer.blogs,
});
export default connect(mapStateToProps, { getMoiBlogs })(Blog);
