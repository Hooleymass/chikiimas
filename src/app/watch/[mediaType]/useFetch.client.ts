export async function fetchMediaDetails(mediaType: string, id: string) {
  try {
    const lang = await fetch('https://chikiimass.me/api/language');
    const langData = await lang.json();
    const language = langData.language || 'en-US'; // Default to 'en-US' if no language is returned

    const apiKey = process.env.NEXT_PUBLIC_APP_TMDB_API;

    // Fetch request with custom headers
    const res = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=${language}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': language,
        'Authorization': `Bearer ${apiKey}`, // Add this if TMDB requires authorization tokens
      }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch media details from TMDB");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error; // Propagate the error
  }
}



export async function fetchMediaDetails2(
  endpoint: string, // This will be the flexible endpoint (e.g., "movie/1234", "tv/1234/1/1")
  additionalParams: Record<string, string> = {} // Optional params such as page, region, etc.
) {
  const lang = await fetch('https://chikiimass.me/api/language');
  const langData = await lang.json();
  const language = langData.language || 'en-US'; // Default to 'en-US' if no language is returned
  const apiKey: any = process.env.NEXT_PUBLIC_APP_TMDB_API;
  const baseUrl = 'https://api.themoviedb.org/3/';

  // Add API key and language to the URL
  const url = new URL(`${baseUrl}${endpoint}`);
  url.searchParams.append('api_key', apiKey);
  url.searchParams.append('language', language);

  // Append any additional params provided by the user
  for (const [key, value] of Object.entries(additionalParams)) {
    url.searchParams.append(key, value);
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Failed to fetch media details from TMDB for ${endpoint}`);
  }

  return res.json();
}
