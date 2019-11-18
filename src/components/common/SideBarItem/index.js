import './style.css'
const isIcon = (icon, iconDesc) => {
  if (icon) {
    return <img src={icon} alt={iconDesc} />;
  }
};
export default ({ icon, iconDesc, sideBarItemStyle, itemText,path }) => (
  <div className={`d-flex flex-row side-bar-item ${sideBarItemStyle}`}>
    {isIcon()}
    <a className='nav-item nav-link' href={`${path}`}>
    {itemText}
    </a>
  </div>
);
