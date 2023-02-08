import React from "react";
import PropTypes from "prop-types";

export const LoginView = ({ user, onBackClick }) => {
  return (
    <div
      onClick={() => {
        onUserClick(user);
      }}
    >
      {user.name}
    </div>
  );
};

  LoginView.propTypes = {
   User: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
  }).isRequired,
onUserClick: PropTypes.func.isRequired
};
