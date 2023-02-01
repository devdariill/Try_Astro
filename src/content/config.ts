// // 1. Import utilities from `astro:content`
// import { z, posts } from 'astro:content'
// // 2. Define a schema for each collection you'd like to validate.
// const blogCollection = posts({
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//     image: z.string().optional(),
//   }),
// })
// // 3. Export a single `collections` object to register your collection(s)
// export const collections = {
//   blog: blogCollection,
// }
