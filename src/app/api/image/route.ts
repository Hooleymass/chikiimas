// app/api/image/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Extract the path from the request URL
  const { searchParams } = new URL(req.url);
  const path = searchParams.get('path');

  if (!path) {
    return NextResponse.json({ error: 'Invalid image path' }, { status: 400 });
  }

  const tmdbImageUrl = `https://image.tmdb.org/t/p/${path}`;

  // Fetch the image from TMDB
  const response = await fetch(tmdbImageUrl);

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg';

  // Create a response to stream the image back
  return new NextResponse(response.body, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
