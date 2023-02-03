import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const posts = await getCollection('posts')
  return rss({
    title: 'My Blog',
    description: 'My blog description',
    site: context.site.origin,
    link: 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      link: `/posts/${post.slug}`,
      //   description: post.body,
    })),
  })
}
