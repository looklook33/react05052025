import React from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Example authentication check
    if (!isAuthenticated) {
      return <p>Not authenticated</p>;
    }
    return <WrappedComponent {...props} user={{ name: 'John Doe' }} />;
  };
};

const UserProfile = (props) => {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Hello, {props.user.name}!</p>
        </div>
    )
}

const AuthenticatedProfile = withAuth(UserProfile);

export default AuthenticatedProfile;