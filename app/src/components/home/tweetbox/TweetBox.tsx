import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import WallpaperOutlinedIcon from '@material-ui/icons/WallpaperOutlined';

import './_tweetBox.scss';

const TweetBox = () => {
  return (
    <div className="tweetbox__container">
      <div className="tweetbox__title">
        <h2>Home</h2>
      </div>
      <div className="tweetbox">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="tweetbox__avatar"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="tweetbox__input"
        />
      </div>
      <div className="tweetbox__file-upload">
        <div className="file">
          <label htmlFor="tweetbox__img">
            <WallpaperOutlinedIcon />
          </label>
          <input type="file" name="" id="tweetbox__img" />
        </div>
        <button className="tweetbox__btn">Tweet</button>
      </div>
    </div>
  );
};
export default TweetBox;
