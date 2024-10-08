import React from 'react';
import WatchPage from '../../components/watchPage';
import Sidebar from '../../components/sidebar';
import '../../watch.scss';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const Watch = ({ params }: { params: any }) => {
  const { mediaType, id } = params;

  if (mediaType === 'tv') {
    revalidatePath(`/watch/${mediaType}/${id}`);
    redirect(`/watch/tv/${id}/1/1`);
  }


  return (
    <div className='main'>
      <div className='watchPage'>
        <WatchPage
          mediaType={mediaType}
          id={id}
        />
      </div>
      <div className='sidebar'>
        <Sidebar mediaType={mediaType} id={id} />
      </div>
    </div>
  );
};

export default Watch;
