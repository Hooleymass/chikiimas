import React from 'react'
import Person from './page.client'
import { fetchMediaDetails2 } from '@/app/watch/[mediaType]/useFetch.client'

function page() {
  return (
    <div>
      <Person />
    </div>
  )
}

export default page

export async function generateMetadata({ params }: { params: any }) {
  const { id } = params;
  
  // Fetch data from the API
  const credits = await fetchMediaDetails2(`person/${id}`);
  
  const avatar = "/avatar.png";
  const profileImg = credits?.profile_path ? `/api/image?path=w185${credits.profile_path}` : avatar;
  const biography = credits?.biography || "No biography available.";
  const birthday = credits?.birthday || "N/A";
  const deathday = credits?.deathday || null;
  const placeOfBirth = credits?.place_of_birth || "Unknown";
  const aliases = credits?.also_known_as && credits?.also_known_as.length > 0 ? credits?.also_known_as.join(", ") : "N/A";
  const posterUrl = `/api/image?path=w185${credits?.poster_path || credits?.backdrop_path}`;
  const faviconUrl = `/api/image?path=w185${credits?.profile_path || credits?.backdrop_path}`;
  
  // Dynamic URL for the person's page
  const url = `/person/${id}`;
  
  return {
    title: `${credits?.name} - Biography`,
    description: biography,
    openGraph: {
      title: `${credits?.name}`,
      description: biography,
      url: url,
      type: 'profile',
      profile: {
        firstName: credits?.name?.split(" ")[0],
        lastName: credits?.name?.split(" ").slice(1).join(" ") || "",
        username: aliases,
        gender: credits?.gender === 1 ? "Female" : credits?.gender === 2 ? "Male" : "Unknown",
      },
      images: [
        {
          url: profileImg,
          width: 780,
          height: 1170,
          alt: `${credits?.name}'s profile image`
        }
      ]
    },
    icons: {
      icon: faviconUrl,
    },
  };
}
