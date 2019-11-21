import './sidebar.css'
export default ({ sideBarStyle, children }) => (
  <nav
    className={`sidebar mr-2 h-100 d-flex flex-column bg-light  ${sideBarStyle}`}
  >
    <style jsx>{`
      .sidebar {
        position: fixed !important;
        top: 3.4375rem;
        margin-left: -0.9375rem;
      }
    `}</style>
    {children}
  </nav>
);