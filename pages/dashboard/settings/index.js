import React, { Component } from "react";
import { MoiForm, MoiInput } from "../../../src/components/common";
import { onTextChange, updateUser } from "../../../src/actions";
import { connect } from "react-redux";
class Settings extends Component {
  render() {
    const { userName, photoURL, updateUser, onTextChange } = this.props;
    return (
      <div className="h-100 mt-3">
        <h3>Settings</h3>
        <MoiForm
          onSubmit={e => {
            e.preventDefault();
            updateUser({ userName, photoURL });
          }}
        >
          <h5>Account Manager</h5>
          <br />
          <MoiInput
            value={userName}
            label="User Name"
            onChangeText={e => {
              e.preventDefault();
              onTextChange({
                prop: "userName",
                value: e.target.value
              });
            }}
            type="text"
            className="form-control"
            id="settingsUsername"
            placeholder={'MOIKUNE'}
          />
          <MoiInput
            label={"Avatar (url)"}
            value={photoURL}
            type="text"
            className="form-control"
            id="settingsAvatar"
            placeholder="Insert Avatar URL"
            onChangeText={e => {
              e.preventDefault();
              onTextChange({
                prop: "photoURL",
                value: e.target.value
              });
            }}
          />
        </MoiForm>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userName: state.GeneralReducer.userName,
  photoURL: state.GeneralReducer.photoURL
});
export default connect(mapStateToProps, { onTextChange, updateUser })(Settings);
