import { MoiText, MoiInput, MoiForm, MoiSelector } from "../common/";
import { connect } from "react-redux";
import { contentManagerTextChange } from "./../../actions/ContentManagerActions/index";

const MoiPost = ({ contentManagerTextChange }) => (
  <MoiForm formStyle={"w-100"} id={"content-mananger-form"}>
    <MoiInput
      label={"Title"}
      id={"content-title"}
      onChangeText={e => {
        e.preventDefault();
        contentManagerTextChange({
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
        contentManagerTextChange({
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
        contentManagerTextChange({
          prop: "content",
          value: e.target.value
        });
      }}
    />
    <MoiSelector
      label={"Category"}
      id={"content-manager-selector"}
      options={["Guide"]}
      onChange={e => {
        e.preventDefault();
        contentManagerTextChange({
          prop: "category",
          value: e.target.value
        });
      }}
    />
  </MoiForm>
);
const mapStateToProp = state => ({
  title: state.ContentManagerReducer.title,
  description: state.ContentManagerReducer.description,
  content: state.ContentManagerReducer.content,
  category: state.ContentManagerReducer.category
});
export default connect(mapStateToProp, { contentManagerTextChange })(MoiPost);
