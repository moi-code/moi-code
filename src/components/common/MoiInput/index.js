export default ({ id, label, value, type, placeholder, onChangeText }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      onChange={onChangeText}
      type={type}
      className="form-control"
      id={id}
      placeholder={placeholder}
    />
  </div>
);
