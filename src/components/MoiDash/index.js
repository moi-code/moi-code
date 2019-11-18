import "./moidash.css";
import SideBar from "../SideBar";
import SideBarItem from "../common/SideBarItem";
import { connect } from "react-redux";
const showDash = (moiDashStyle, children, auth) => {
  if (auth) {
    return (
      <div className={`moidash d-flex flex-row h-100 ${moiDashStyle}`}>
        <SideBar>
          <SideBarItem itemText={"Dashboard"} path={"/dashboard"}></SideBarItem>
          <SideBarItem
            itemText={"Content Manager"}
            path={"/dashboard/content-manager"}
          ></SideBarItem>
        </SideBar>

        <div className="moidash-body pt-3 h-100">{children}</div>
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
const MoiDash = ({ moiDashStyle, children, auth }) => {
  return showDash(moiDashStyle, children, auth);
};

const mapStateToProps = state => ({
  auth: state.AuthReducer.auth
});
export default connect(mapStateToProps)(MoiDash);
