import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
// import sanitizeHtml from 'sanitize-html'
// import MarkdownIt from 'markdown-it'
// const parser = new MarkdownIt()

export async function get(context) {
  const posts = await getCollection('posts', ({ data }) => {
    return data.published
  })
  //   const posts = await getCollection('posts')
  return rss({
    title: 'My Blog',
    description: 'My blog description',
    site: context.site.origin,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedDate,
      content: post.body,
      //   content: sanitizeHtml(parser.render(post.body)),
      link: `/posts/${post.slug}`,
      //   description: post.body,
    })),
  })
}
