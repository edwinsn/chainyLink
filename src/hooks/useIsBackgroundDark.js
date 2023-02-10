import { useSelector } from 'react-redux'

export default function useIsBackgroundDark() {

    const backgroundColor = useSelector(state => state.backgroundColor)

    return isBackgroundDark(backgroundColor)

}

function isBackgroundDark(backgroundColor) {

    const color = backgroundColor.toLowerCase();
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return yiq < 128;
}