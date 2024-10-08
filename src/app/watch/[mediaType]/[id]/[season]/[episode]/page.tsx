import React from 'react';
import WatchPage from '../../../../components/watchPage';
import Sidebar from '../../../../components/sidebar';
import '../../../../watch.scss';

const Watch = async ({ params }: { params: any }) => {
  // Await params before accessing them
  const { mediaType, id, season, episode } = await params;

  return (
    <div className='main'>
      <div className='watchPage'>
        <WatchPage
          mediaType={mediaType}
          id={id}
          season={season ? parseInt(season) : undefined}
          episode={episode ? parseInt(episode) : undefined}
        />
      </div>
      <div className='sidebar'>
        <Sidebar mediaType={mediaType} id={id} />
      </div>
    </div>

  );
};

export default Watch;
