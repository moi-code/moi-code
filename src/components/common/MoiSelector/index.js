export default ({ id, containerStyle, labelStyle, options, onChange }) => (
  <div className={`input-group mb-3 ${containerStyle}`}>
    <div className={`input-group-prepend`}>
      <label className={`input-group-text ${labelStyle}`} forhrml={id}>
        Category
      </label>
    </div>
    <select onChange={onChange} className="custom-select" id={id}>
      <option value=''>Choose...</option>
      {options.map((opt, i) => (
        <option className="text-capitalize" key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
