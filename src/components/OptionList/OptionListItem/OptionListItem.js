import Proptypes from 'prop-types';
import OLItemStl from './OptionListItem.module.css';
export default function OptionListItem({ option, func }) {
  return (
    <li className={OLItemStl.feedbackOptionItem}>
      <button type="button" className={OLItemStl.button} onClick={func}>
        {option}
      </button>
    </li>
  );
}

OptionListItem.propTypes = {
  option: Proptypes.string.isRequired,
  func: Proptypes.func.isRequired,
};
