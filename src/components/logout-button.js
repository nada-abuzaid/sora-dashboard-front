import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-danger btn-block"
      onClick={logout}
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
