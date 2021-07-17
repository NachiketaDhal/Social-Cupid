import React from 'react';

import { ISideBarProps } from '../../interface';
import './_sideBarLayout.scss';

const SideBarLayout = ({ Icon, text }: ISideBarProps) => {
  return (
    <div className="sidebar__layout">
      <Icon />
      <h4>{text}</h4>
    </div>
  );
};

export default SideBarLayout;
