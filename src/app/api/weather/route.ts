import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({
      ok: false,
      error: 'City not provided'
    }, { status: 400 });
  }

  // Simulate fetching weather data
  if (city.toLowerCase() === 'invalidcity') {
    return NextResponse.json({
      ok: false,
      error: 'City not found. Please check spelling and try again.'
    }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    city,
    weather: {
      condition: 'Clear Sky',
      temperature: 25,
      feels_like: 27,
      min_temperature: 22,
      max_temperature: 28
    }
  });
}
