export default ({ children, onSubmit, formStyle, formButtonStyle }) => (
  <form
    onSubmit={onSubmit}
    className={`mt-5 p-5 mx-auto border border-dark bg-white ${formStyle}`}
  >
    {children}
    <button type={'submit'}className={`btn btn-outline-dark ${formButtonStyle}`}>
      Submit
    </button>
  </form>
);
