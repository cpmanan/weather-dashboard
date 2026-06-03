import { NextApiRequest, NextApiResponse } from 'next';

interface WeatherResponse {
  ok: boolean;
  feature: string;
  city?: string;
  temperature?: number;
  condition?: string;
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<WeatherResponse>) {
  const { city } = req.query;

  if (!city || typeof city !== 'string') {
    return res.status(400).json({ ok: false, feature: 'weather', error: 'Invalid city name' });
  }

  try {
    // Simulate fetching weather data
    const weatherData = {
      city: city,
      temperature: 25,
      condition: 'Clear Sky'
    };

    return res.status(200).json({ ok: true, feature: 'weather', ...weatherData });
  } catch (error) {
    return res.status(500).json({ ok: false, feature: 'weather', error: 'Internal server error' });
  }
}
