import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from '../../utilities/uuidv4';

import './PropIcon.scss';

const icon = {
  ritual: '🕯',
  concentration: '🌀',
  cost: '💰',
};

const label = {
  ritual: 'Can be cast as a ritual',
  concentration: 'Requires concentration',
  cost: 'Has a material cost',
};

export default function PropIcon({ type }) {
  const id = uuidv4();

  if (!type) {
    return null;
  }

  return (
    <div className="prop-icon">
      <span role="img" title={label[type]} aria-hidden={true}>
        {icon[type]}
      </span>
      <span id={id} className="visuallyHidden">
        {label[type]}
      </span>
    </div>
  );
}

PropIcon.propTypes = {
  type: PropTypes.oneOf(['ritual', 'concentration', 'cost']).isRequired,
};
