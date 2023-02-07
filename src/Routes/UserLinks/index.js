import useUserLinks from './hooks/useUserLinks'
import LinksList from './components/LinksList'
import useFromLocalStorage from '../../hooks/useFromLocalStorage'
import userIcon from '../../Assets/Images/user.svg'
import Loading from '../../Assets/Animations/loading'

const UserLinks = () => {

    const userId = useFromLocalStorage('user')?.uid
    const [userLinks, loading, noLinks] = useUserLinks({ userId })


    if (!userId) {
        return (
            <section className='flex flex-column centered'>
                <img alt='' src={userIcon} />
                <h2 className='my-2'>
                    Log to save your links
                </h2>
                <a
                    href='/login'
                    className='bg-pink btn'>
                    Login
                </a>
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
        <section className='flex-column'>
            <h1 className='text-center mb-3'>
                Your links
            </h1>

            {loading ? <div className='w-100 h-100 flex centered'>
                <Loading />
            </div> : <LinksList
                links={userLinks}
            />
            }
        </section>
    )

}

export default UserLinks;