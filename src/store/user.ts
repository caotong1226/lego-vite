import { defineStore } from "pinia";


export interface UserProps {
    isLogin: boolean;
    userName?: string;
}

export const useUserStore = defineStore('counter', () => {
    const isLogin = ref<Boolean>(false)
    const userName = ref<string>()
    const login = () => {
        isLogin.value = true;
        userName.value = 'jimmy';
    }
    const logout = () => {
        isLogin.value = false;
    }

    return { isLogin, userName, login, logout }
}) 