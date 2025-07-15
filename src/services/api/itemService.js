import axios from './axios.js'

// Dummy simulation using Axios + delay
export const getItems = async () => {
  const response = await axios.get('/items') // <- no real endpoint yet
  return response.data
}

export const getItemById = async (id) => {
  const response = await axios.get(`/items/${id}`)
  return response.data
}