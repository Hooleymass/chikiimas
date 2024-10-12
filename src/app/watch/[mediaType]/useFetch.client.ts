export async function fetchMediaDetails(mediaType: string, id: string) {
    const apiKey = process.env.NEXT_PUBLIC_APP_TMDB_API; // Using the same key as in the hook
    const res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US`);
    
    if (!res.ok) {
      throw new Error("Failed to fetch media details from TMDB");
    }
  
    return res.json();
  }
  