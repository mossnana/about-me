import React from "react";
import ProfileCover from "../components/profile-cover.component";
import ProfileImage from "../components/profile-image.component";
import ProfileDetail from "../components/profile-detail.component";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileCover />
      <ProfileImage />
      <ProfileDetail />
    </div>
  );
};

export default Profile;
