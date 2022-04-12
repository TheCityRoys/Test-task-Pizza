import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={310}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="147" cy="126" r="130" />
      <rect x="22" y="268" rx="0" ry="0" width="258" height="19" />
      <rect x="22" y="296" rx="7" ry="7" width="258" height="70" />
      <rect x="20" y="396" rx="0" ry="0" width="95" height="22" />
      <rect x="145" y="384" rx="20" ry="20" width="132" height="37" />
    </ContentLoader>
  );
}

export default LoadingBlock;
