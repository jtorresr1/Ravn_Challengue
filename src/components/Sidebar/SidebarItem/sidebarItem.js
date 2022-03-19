import './style.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SidebarItem({value, isSelected, isFirst}) {
  SidebarItem.propTypes = {
    value: PropTypes.node.isRequired,
    isSelected: PropTypes.node.isRequired,
    isFirst: PropTypes.node.isRequired,
  };
  return (
    <>
      <Link to={`${value?.direction}`} className="link--clean">
        <div
          className={`sidebar--item ${
            isSelected
              ? 'sidebar--item--selected'
              : 'sidebar--item--no--selected'
          }`}>
          <p
            className={`${
              isSelected ? 'text--selected' : 'text--no--selected'
            }`}>
            {' '}
            {value?.title}
          </p>
          <div
            className={`${
              isSelected ? 'icon--selected' : 'icon--no--selected'
            }`}>
            <img
              className={`${
                isFirst ? 'icon--position' : 'icon--position--no--first'
              }`}
              src={isSelected ? value?.iconColor : value?.icon}
            />
          </div>
          <div
            className={`${
              isSelected ? 'rectangule--selected' : 'rectangule--no--selected'
            }`}></div>
        </div>
      </Link>
    </>
  );
}
