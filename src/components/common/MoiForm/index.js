export default ({children}) => (
  <form className='mt-5 p-5 mx-auto border border-dark bg-white'>
    {children}
    <button type='submit' className='btn btn-outline-dark'>
      Submit
    </button>
  </form>
);