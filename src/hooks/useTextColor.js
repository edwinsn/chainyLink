import useIsBackgroundDark from './useIsBackgroundDark'

export default function useTextColor() {
    return useIsBackgroundDark() ? 'white' : undefined
}
