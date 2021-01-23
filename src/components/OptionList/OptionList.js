import Proptypes from 'prop-types';
import OptionListItem from './OptionListItem/OptionListItem.js';
import OLStyle from './OptionList.module.css';
export default function OptionList({ options, arrayOfFunctions }) {
  return (
    <ul className={OLStyle.feedbackOptions}>
      {options.map((option, idx) => {
        return (
          <OptionListItem
            key={`Button -${option}`}
            option={option}
            func={arrayOfFunctions[idx]}
          />
        );
      })}
    </ul>
  );
}
OptionList.propTypes = {
  options: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
  arrayOfFunctions: Proptypes.arrayOf(Proptypes.func.isRequired).isRequired,
};
