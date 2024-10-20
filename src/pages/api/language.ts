import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get the 'Accept-Language' header from the request
    const acceptLanguage = req.headers['accept-language'] || 'en-US'; // Default to 'en-US' if not found

    // Parse the first language preference from the header
    const userLocale = acceptLanguage.split(',')[0];

    // Return the user's locale as a JSON response
    res.status(200).json({ language: userLocale });
}
