
import "./moidash.css";
import SideBar from "../SideBar";
import SideBarItem from "../common/SideBarItem";
import { connect } from "react-redux";
import { Component } from "react";
import { handleAuth } from "./../../actions/AuthActions/index";
import  Router  from 'next/router';

class MoiDash extends Component {
  showDash = (moiDashStyle, children, authed) => {
    if (authed) {
      return (
        <div className={`moidash d-flex flex-row h-100 ${moiDashStyle}`}>
          <SideBar>
            <SideBarItem
              itemText={"Dashboard"}
              path={"/dashboard"}
            ></SideBarItem>
            <SideBarItem
              itemText={"Content Manager"}
              path={"/dashboard/content-manager"}
            ></SideBarItem>
          </SideBar>

          <div className="moidash-body col pt-3 h-100">{children}</div>
        </div>
      );
    } else {

      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  };
  render() {
    const { moiDashStyle, children, authed } = this.props;
    return this.showDash(moiDashStyle, children, authed);
  }
}

const mapStateToProps = state => ({
  authed: state.AuthReducer.authed
});
export default connect(mapStateToProps, { handleAuth })(MoiDash);
