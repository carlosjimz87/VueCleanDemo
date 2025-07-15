import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://dummy-api.local/api', // placeholder, adjust if needed
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})
// MOCK RESPONSES ONLY FOR DEMO
axiosInstance.interceptors.request.use((config) => {
    if (config.url === '/items') {
        config.adapter = async () => {
            return {
                data: [
                    {id: 1, name: 'Item 1', description: 'Mock item 1'},
                    {id: 2, name: 'Item 2', description: 'Mock item 2'},
                ],
                status: 200,
                statusText: 'OK',
                headers: {},
                config,
            }
        }
    }

    if (config.url?.startsWith('/items/')) {
        const id = config.url.split('/').pop()
        config.adapter = async () => {
            return {
                data: {id, name: `Item ${id}`, description: `Details of item ${id}`},
                status: 200,
                statusText: 'OK',
                headers: {},
                config,
            }
        }
    }

    return config
})

export default axiosInstance