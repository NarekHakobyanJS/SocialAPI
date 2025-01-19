import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": '3942348e-0f62-40e2-a126-0216d80a64be'
    }
})

export const SocialAPI = {
    getUsers(page, count) {
        return instance.get(`/users?count=${count}&page=${page}`)
    },
    getUserProfile(userId) {
        return instance.get(`/profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    login(email, password) {
        return instance.post(`/auth/login`, { email, password })
    },
    authMe() {
        return instance.get('/auth/me')
    },
    changeStatus(newStatus) {
        return instance.put(`/profile/status`, { status: newStatus })
    },
    changeProfilePhoto(file) {
        const formData = new FormData()
        formData.append('file', file)
        return instance.put('/profile/photo', formData)
    }
}