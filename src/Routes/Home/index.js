import '../../Assets/css/App.css';
import icon_decoration from '../../Assets/Images/icon_decoration.svg';
import './index.css';
import HeroAmination from '../../Assets/Animations/HeroAnimation';
import useIsPhoneView from '../../hooks/useIsPhoneView';

function Home() {

    const isPhoneView = useIsPhoneView()

    return (
        <div className="App">
            <section className='main flex centered' id='hero-container'>
                <div className='flex-column align-items-center' id='hero_text'>
                    <div id='hero-text-container'>
                        <h1 className='align-items-center'>
                            <span className='inline-flex align-items-center'>
                                <img
                                    src={icon_decoration}
                                    alt=''
                                    className='text-icon'
                                />
                                <span className='pink'>
                                    Share
                                </span> your
                            </span>
                            <br /> <span className='blue'>
                                Links
                            </span> at once
                        </h1>
                        <h2 className='my-3'>
                            Send you favory playlist from diferent sites,
                            your social networks or just a shopping car from diferent stores!
                        </h2>
                        <a
                            href='/'
                            className={`btn bg-pink text-center mt-1 ${!isPhoneView && 'mb-3'} block`}
                        >
                            Chain links!
                        </a>
                    </div>
                </div>
                <div
                    className='flex centered'
                    id='hero_image'
                >
                    <HeroAmination />
                </div>
            </section>
        </div>
    );
}

export default Home;