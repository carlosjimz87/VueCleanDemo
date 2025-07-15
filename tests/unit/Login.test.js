import {mount} from '@vue/test-utils'
import Login from '@/views/Login.vue'
import {createTestingPinia} from '@pinia/testing'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{path: '/dashboard', component: {template: '<div>Dashboard</div>'}}],
})

test('Login button triggers auth flow', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(Login, {
        global: {
            plugins: [createTestingPinia(), router],
        },
    })

    const inputs = wrapper.findAll('input')
    await inputs[0].setValue('carlos')
    await inputs[1].setValue('1234')
    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('Login')
})