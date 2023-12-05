import defaultEyeCatch from '~/assets/images/defaultEyeCatch.png'
import client from '~/plugins/contentful'
export const state = () => ({
  posts: [],
  currentPost: [],
  categories: [],
  tags: []
})
export const getters = {
  linkTo: () => (name, obj) => {
    return { name: `${name}-slug`, params: { slug: obj.fields.slug } }
  },
  setEyeCatch: () => (post) => {
    if (!!post.fields.image && !!post.fields.image.fields) return { url: `https:${post.fields.image.fields.file.url}`, title: post.fields.image.fields.title }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  },
  draftChip: () => (post) => {
    if (!post.fields.publishDate) return 'draftChip'
  },
  relatedPosts: state => (category) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const catId = state.posts[i].fields.category.sys.id
      if (category.sys.id === catId) posts.push(state.posts[i])
    }
    return posts
  },
  associatePosts: state => (currentTag) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      if (post.fields.tags) {
        const tag = post.fields.tags.find(tag => tag.sys.id === currentTag.sys.id)
        if (tag) posts.push(post)
      }
    }
    return posts
  }
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setLinks(state, entries) {
    state.tags = []
    state.categories = []
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      if (entry.sys.contentType.sys.id === 'tag') state.tags.push(entry)
      else if (entry.sys.contentType.sys.id === 'category') state.categories.push(entry)
    }
    state.categories.sort((a, b) => a.fields.sort - b.fields.sort)
  }
}

export const actions = {
  async getPosts({ commit }) {
    await client.getEntries({
      content_type: 'blog',
      order: '-fields.publishDate',
      include: 1
    }).then((res) => {
      commit('setLinks', res.includes.Entry)
      commit('setPosts', res.items)
    }).catch(console.error)
  },
}