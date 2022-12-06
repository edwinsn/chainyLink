import useUserLinks from './hooks/useUserLinks'
import LinksList from './components/LinksList'
import useFromLocalStorage from '../../hooks/useFromLocalStorage'


const UserLinks = () => {

    const userId = useFromLocalStorage('user')?.uid
    const [userLinks, , noLinks] = useUserLinks({ userId })

    if (!userId) {
        return (
            <section>
                <h2>Log to save your links</h2>
            </section>
        )
    }

    if (noLinks) {
        return (
            <section>
                <h2>You don't have any links yet</h2>
            </section>
        )
    }


    return (

        <section className='flex-column centered'>
            <LinksList
                links={userLinks}
            />
        </section>
    )

}

export default UserLinks;