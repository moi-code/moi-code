import "./Header.css";
export default ({ children }) => (
  <div className="Header d-flex flex-column p-5 h-100 w-100">
    <style jsx>{`
      .Header {
        height: 31.25rem;
        width: 31.25rem;
      }
    `}</style>
    {children}
  </div>
);
