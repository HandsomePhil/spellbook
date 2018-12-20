import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from '../../utilities/uuidv4';

import VisuallyHidden from '../VisuallyHidden';

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

export default class PropIcon extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
    };
  }

  render() {
    const { type } = this.props;
    const id = uuidv4();

    return (
      <div className="prop-icon">
        <span title={label[type]} aria-hidden={true}>
          {icon[type]}
        </span>
        <VisuallyHidden id={id}>{label[type]}</VisuallyHidden>
      </div>
    );
  }
}

PropIcon.propTypes = {
  type: PropTypes.oneOf(['ritual', 'concentration', 'cost']).isRequired,
};
