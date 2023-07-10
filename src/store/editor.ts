
import type { TextComponentProps } from '@/constants/defaultProps';
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
    { id: uuidv4(), name: 'l-text', props: { text: "hello", fontSize: '20px', fontFamily: "宋体", color: 'red' } },
    { id: uuidv4(), name: 'l-text', props: { text: "hello2", fontSize: '30px' } },
    { id: uuidv4(), name: 'l-text', props: { text: "hello3", fontSize: '15px' } },
]

export const useEditorStore = defineStore('counter', () => {
    const components = ref<ComponentData[]>(testComponents)
    const currentElementId = ref<string>()
    const addComponent = (component: ComponentData) => {
        components.value.push(component)
    }
    const setActive = (currentId: string) => {
        currentElementId.value = currentId
    }
    const updateComponent = ({ key, value }: { key: string, value: any }) => {
        const updatedComponent = components.value.find((component) => component.id === currentElementId.value)
        if (updatedComponent) {
            updatedComponent.props[key as keyof TextComponentProps] = value
        }
    }
    return { components, currentElementId, addComponent, setActive, updateComponent }
})