const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const fetchAllPosts = async () => {
  const res = await fetch(BASE_URL)
  return res.json()
}

export default {
  fetchAllPosts
}