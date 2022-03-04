// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {

    const { name, email } = this.props.user
    console.log(this);

    return (
      <div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={this.props.user.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;