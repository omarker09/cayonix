import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cayonix.com/'
    },
    {
      url: 'https://cayonix.com/about',
    },
    {
      url: 'https://cayonix.com/contact'
    },
    {
      url: 'https://cayonix.com/ourprojects'
    }
  ]
}