import React from 'react';

import Video from './Video';

import information from '../../resources/information.json';

export default function VideosPage() {
  return (
    <>
      <h1>video page</h1>
      <Video data={information[6]} />
    </>
  );
}
