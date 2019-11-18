import './sidebar.css'
export default ({sideBarStyle, children})=>(
  <nav className={`sidebar mr-2 h-100 d-flex flex-column bg-white  ${sideBarStyle}`}>
    {children}
  </nav>
)