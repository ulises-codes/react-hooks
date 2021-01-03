# @ulises-codes/react-hooks

The custom hooks I use most often.

Hooks Included:

**useDevice**

    import { useDevice } from '@ulises-codes/react-hooks'
    const { userAgent, device, isMobile } = useDevice()

j
**useWindowSize**

    import { useWindowSize } from '@ulises-codes/react-hooks'
    const { width, height } = useWindowSize()

**useShareAPI**

    import { useShareAPI } from '@ulises-codes/react-hooks'
    const { share, canShare } = useShareAPI()

**useScript**

    import { useScript } from '@ulises-codes/react-hooks'
    const { status } = useScript({src, async?, defer?})

**useResizeObserver**

    import { useResizeObserver } from '@ulises-codes/react-hooks'

    function SomeReactComponent() {
        const [backdropHeight, setBackdropHeight] = useState()
        useResizeObserver({callback, ref})

        function grabHeight(entries) {
            for (let entry of entries) {

                if (entry.borderBoxSize) {
                    if (entry.borderBoxSize.blockSize !== backdropHeight) {
                        return setBackdropHeight(entry.borderBoxSize.blockSize)
                    }
                }
            }
        }
    }
