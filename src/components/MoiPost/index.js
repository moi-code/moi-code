import { MoiText, MoiInput, MoiForm, MoiSelector } from "../common/";
import { connect } from "react-redux";
import { submitContent, onTextChange } from "../../actions";

const MoiPost = ({
  title,
  description,
  content,
  category,
  onTextChange,
  userData,
  submitContent
}) => (
  <MoiForm
    formStyle={"w-100"}
    id={"content-mananger-form"}
    onSubmit={e => {
      e.preventDefault();
      submitContent({
        title,
        description,
        content,
        category,
        userData
      });
    }}
  >
    <style jsx>{`
      .moidash-body {
        margin-left: 11.125rem;
      }
    `}</style>
    <MoiInput
      label={"Title"}
      id={"content-title"}
      onChangeText={e => {
        e.preventDefault();
        onTextChange({
          prop: "title",
          value: e.target.value
        });
      }}
    />
    <MoiInput
      label={"Description"}
      id={"content-descrption"}
      onChangeText={e => {
        e.preventDefault();
        onTextChange({
          prop: "description",
          value: e.target.value
        });
      }}
    />
    <MoiText
      label={"Enter Text"}
      id={"content-manager-text"}
      onChangeText={e => {
        e.preventDefault();
        onTextChange({
          prop: "content",
          value: e.target.value
        });
      }}
    />
    <MoiInput
      label={"#Tags"}
      id={"content-tags"}
      onChangeText={e => {
        e.preventDefault();
        onTextChange({
          prop: "tags",
          value: e.target.value
        });
      }}
    />
    <MoiSelector
      label={"Category"}
      id={"content-manager-selector"}
      options={["Guide", "Blog"]}
      onChange={e => {
        e.preventDefault();
        onTextChange({
          prop: "category",
          value: e.target.value
        });
      }}
    />
  </MoiForm>
);
const mapStateToProp = state => ({
  userData: state.AuthReducer.userData,
  title: state.GeneralReducer.title,
  description: state.GeneralReducer.description,
  content: state.GeneralReducer.content,
  category: state.GeneralReducer.category
});
export default connect(mapStateToProp, { onTextChange, submitContent })(
  MoiPost
);
