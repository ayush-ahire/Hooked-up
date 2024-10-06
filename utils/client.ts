import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'vx5gpiut',
  dataset: 'production',
  apiVersion: '2024-09-27',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});