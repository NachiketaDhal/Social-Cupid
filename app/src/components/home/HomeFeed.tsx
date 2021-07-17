import React from 'react';

import TweetBox from './tweetbox/TweetBox';
import './_homeFeed.scss';

const HomeFeed = () => {
  return (
    <div className="homefeed__container">
      <TweetBox />
    </div>
  );
};

export default HomeFeed;
