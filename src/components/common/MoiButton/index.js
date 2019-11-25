export default ({ onPress, btnStyle, children }) => (
  <button onClick={onPress} className={`btn ${btnStyle}`}>
    {children}
  </button>
);