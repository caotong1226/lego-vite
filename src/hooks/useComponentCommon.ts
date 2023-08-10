import { pick } from 'lodash-es'
import type { CommonComponentProps } from '@/constants/defaultProps'
import type { StyleValue } from 'vue'
const useComponentCommon = (props: Readonly<Partial<CommonComponentProps>>, picks: string[]) => {
    const styleProps = computed(() => pick(props, picks) as StyleValue)
    const handleClick = () => {
        if (props.actionType === 'url' && props.url) {
            window.location.href = props.url
        }
    }
    return {
        styleProps,
        handleClick
    }
}

export default useComponentCommon