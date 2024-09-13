import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'ia4fu04e',
  dataset: 'production',
  useCdn: true, // Sett til false hvis du jobber med utkast
  apiVersion: '2023-09-13',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
