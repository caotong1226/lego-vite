/*
 * @Date: 2023-03-06 11:04:51
 * @LastEditors: caotong
 * @LastEditTime: 2023-06-08 11:10:01
 * @Description: 路由配置
 */

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/Index.vue'),
            children: [
                { path: '', name: 'home', component: () => import('@/views/Home.vue') },
                { path: 'template/:id', name: 'template', component: () => import('@/views/TemplateDetail.vue') }
            ]
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('@/views/Editor.vue'),
        }
    ]
})

export default router
