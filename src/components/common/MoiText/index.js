export default ({
  label,
  id,
  textlimit,
  containerStyle,
  labelStyle,
  textAreaStyle,
  onChangeText
}) => (
  <div className={`form-group ${containerStyle}`}>
    <label className={`${labelStyle}`} forhtml={id}>
      {label}
    </label>
    <textarea
    onChange={onChangeText}
      maxLength={textlimit}
      className={`form-control ${textAreaStyle}`}
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
);
