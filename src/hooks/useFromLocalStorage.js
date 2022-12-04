export default function useFromLocalStorage(item) {

    try {

        return JSON.parse(localStorage.getItem(item))

    } catch (err) {
        return {}
    }

}
