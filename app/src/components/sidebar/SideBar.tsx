import React from 'react';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import HomeIcon from '@material-ui/icons/Home';
import ExplicitOutlinedIcon from '@material-ui/icons/ExplicitOutlined';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import SideBarLayout from './SideBarLayout';
import './_sideBar.scss';

const SideBar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar__homeicon">
        <FiberSmartRecordIcon />
      </div>
      <div className="sidebar">
        <SideBarLayout Icon={HomeIcon} text="Home" />
        <SideBarLayout Icon={ExplicitOutlinedIcon} text="Explore" />
        <SideBarLayout Icon={NotificationsNoneIcon} text="Notifications" />
        <SideBarLayout Icon={MailOutlineIcon} text="Messages" />
        <SideBarLayout Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SideBarLayout Icon={ListAltIcon} text="Lists" />
        <SideBarLayout Icon={PermIdentityIcon} text="Profile" />
        <SideBarLayout Icon={MoreHorizIcon} text="More" />
      </div>
    </div>
  );
};

export default SideBar;
