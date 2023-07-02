
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid'

export interface EditorProps {
    components: ComponentData[];
    currentElement: string
}

export interface ComponentData {
    props: { [key: string]: any }
    id: string
    name: string
}

export const testComponents: ComponentData[] = [
    { id: uuidv4(), name: 'l-text', props: { text: "hello", fontSize: '20px' } },
    { id: uuidv4(), name: 'l-text', props: { text: "hello2", fontSize: '30px' } },
    { id: uuidv4(), name: 'l-text', props: { text: "hello3", fontSize: '15px' } },
]

export const useEditorStore = defineStore('counter', () => {
    const components = ref<ComponentData[]>(testComponents)
    const currentElement = ref<string>()
    const addComponent = (component: ComponentData) => {
        components.value.push(component)
    }
    return { components, currentElement, addComponent }
})