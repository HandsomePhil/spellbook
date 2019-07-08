import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import VisuallyHidden from '../VisuallyHidden';
import './TextInput.scss';

function handleChange(callback) {
  return e => {
    callback(e.target.value);
  };
}

const TextInput = ({ value, className, onChange, label, ...rest }) => (
  <label className={classNames('text-label')}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <input
      className={classNames('text-input', className)}
      type="text"
      value={value}
      onChange={handleChange(onChange)}
      autoComplete="off"
      {...rest}
    />
  </label>
);

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
