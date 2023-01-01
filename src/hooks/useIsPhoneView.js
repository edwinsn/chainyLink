import React from 'react'

/*
    * This hook is used to detect if the user is using a phone or a computer
*/
export default function useIsPhoneView() {

    const [isPhoneView, setIsPhoneView] = React.useState(false)

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 600px)')
        const handleResize = () => {
            if (mediaQuery.matches) {
                setIsPhoneView(true)
            } else {
                setIsPhoneView(false)
            }
        }
        handleResize()
        mediaQuery.addListener(handleResize)
        return () => mediaQuery.removeListener(handleResize)
    }, [])

    return isPhoneView

}
