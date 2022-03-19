import './style.css';
import logo from './../../static/images/logoRavn.jpg';
import iconDashColor from './../../static/icons/dashboardIconColor.png';
import iconDash from './../../static/icons/dashboardIcon.png';
import iconItemsColor from './../../static/icons/myTaskIconColor.png';
import iconItems from './../../static/icons/myTaskIcon.png';
import SidebarItem from './SidebarItem/sidebarItem';
import PropTypes from 'prop-types';

export default function Sidebar({mainOption = 0}) {
  Sidebar.propTypes = {
    mainOption: PropTypes.node.isRequired,
  };

  const optionsMenu = [
    {
      title: 'DASHBOARD',
      icon: iconDash,
      iconColor: iconDashColor,
      direction: '/',
    },
    {
      title: 'MY TASK',
      icon: iconItems,
      iconColor: iconItemsColor,
      direction: '/mytask',
    },
  ];

  const menuOptionsStatus = [];
  menuOptionsStatus.length = optionsMenu.length;
  try {
    menuOptionsStatus[mainOption] = true;
  } catch (er) {
    console.log(er);
  }

  return (
    <div className="main--menu">
      <div className="logo--Ravn">
        <img src={logo} />
      </div>

      <div className="sidebar--list">
        {optionsMenu.map((option, index) => (
          <SidebarItem
            key={index}
            value={option}
            isSelected={menuOptionsStatus[index] ? true : false}
            isFirst={index == 0 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}
