// pages/api/load-plugin.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import type { LoadPluginQuery } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Destructure and type the query parameters
  const { module }: LoadPluginQuery = req.query;

  try {
    // Replace 'path_to_external_modules' with the actual path or fetching logic for the external module
    const modulePath = `path_to_external_modules/${module}`;
    const importedModule = await import(modulePath);

    // Send back the module data or confirmation
    res.status(200).json({ message: 'Module loaded successfully', module: importedModule });
  } catch (error: any) {
    // If there's an error, send back an error message
    res.status(500).json({ message: 'Error loading module', error: error.message });
  }
}
