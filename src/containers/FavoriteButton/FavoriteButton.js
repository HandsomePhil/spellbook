import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions';
import Button from '../../components/Button';
import VisuallyHidden from '../../components/VisuallyHidden';
import { ICONS } from '../../constants/icons';
import classNames from 'classnames/bind';

class FavoriteButton extends Component {
  render() {
    const { spellId, isActive, ...rest } = this.props;

    const label = isActive ? 'Remove from favorites' : 'Add to favorites';

    return (
      <Button
        className={classNames('favorite-button', { 'is-active': isActive })}
        tabIndex="-1"
        {...rest}
      >
        <span role="presentation">{ICONS.favorites}</span>
        <VisuallyHidden>{label}</VisuallyHidden>
      </Button>
    );
  }
}

FavoriteButton.propTypes = {
  spellId: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isActive: state.favorites.includes(ownProps.spellId),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: e => {
    e.stopPropagation();
    dispatch(toggleFavorite(ownProps.spellId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);
