import React from 'react';
import PropTypes from 'prop-types';

const VoteButtons = (props) => {
  return (
    <span className="column is-narrow rows">
      <a className="is-success is-small"
        onClick={props.voteHandler.bind(null, 'up')}>
        <i className="fa fa-arrow-up row" />
      </a>
      <span>{props.votes}</span>
      <a className="is-success is-small"
        onClick={props.voteHandler.bind(null, 'down')}>
        <i className="fa fa-arrow-down row" />
      </a>
    </span>
  );
};

VoteButtons.propTypes = {
  votes: PropTypes.number.isRequired,
  voteHandler: PropTypes.func.isRequired
};

export default VoteButtons;
