import '../../Assets/css/App.css';
import hero_image from '../../Assets/Images/Frame-1.svg';
import icon_decoration from '../../Assets/Images/icon_decoration.svg';
import './index.css';

function Home() {

    return (
        <div className="App">
            <section className='main flex centered'>
                <div className='flex-column' id='hero_text'>
                    <h1 className='align-items-center'>
                        <span>
                            <img src={icon_decoration} alt='' />
                            Share your
                        </span> <br /> <span className='blue'>
                            Links
                        </span> at once
                    </h1>
                    <h2 className='my-3'>
                        Send you favory playlist from diferent sites,
                        your social networks or just a shhopping car from diferent stores!
                    </h2>
                    <a
                        href='/'
                        className='btn bg-pink text-center mt-1 mb-2'
                    >
                        Chain links!
                    </a>
                </div>
                <div
                    className='flex centered'
                    id='hero_image'
                >
                    <img
                        src={hero_image}
                        alt='Links betten all your platforms' />
                </div>
            </section>

        </div >
    );
}

export default Home;