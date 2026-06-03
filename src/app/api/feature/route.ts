import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { city } = req.query;

    if (!city || typeof city !== 'string') {
      return res.status(400).json({ ok: false, error: 'City name is required and must be a string.' });
    }

    // Simulate fetching weather data
    const weatherData = {
      city: city,
      temperature: 25,
      condition: 'Clear Sky'
    };

    return res.status(200).json({ ok: true, feature: 'weather', data: weatherData });
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ ok: false, error: `Method ${req.method} Not Allowed` });
  }
}
