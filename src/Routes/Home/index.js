import '../../Assets/css/App.css';
import hero_image from '../../Assets/Images/Frame-1.svg';
import icon_decoration from '../../Assets/Images/icon_decoration.svg';
import { Link } from 'react-router-dom';
import './index.css';

function Home() {

    return (
        <div className="App">
            <section className='main full_screen big-gap'>
                <div className='flex-column' id='hero_text'>
                    <h1>
                        <img src={icon_decoration} id="icon_decoration" alt='' />
                        Share your
                        <span className='blue'> Links </span>
                        at once
                    </h1>
                    <h2>
                        Send you favory playlist from diferent sites,
                        your social networks or just a shhopping car from diferent stores!
                    </h2>
                    <Link to='/'>
                        <button
                            className='bg-pink w-100'
                            id='chain-links-button'>
                            Chain links!
                        </button>
                    </Link>
                </div>
                <img
                    id='hero_image'
                    src={hero_image}
                    alt='Links betten all your platforms' />
            </section>

        </div>
    );
}

export default Home;