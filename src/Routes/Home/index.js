import '../../Assets/css/App.css';
import hero_image from '../../Assets/Images/hero_image.jpg';
import Nav from '../../Nav/index'

function Home() {

    return (
        <div className="App">
            <Nav />
            <section className='flex centered full_screen big-gap'>
                <div className='flex-column' id='hero_text'>
                    <h1>
                        Share your
                        <span className='blue'> Links </span>
                        at once
                    </h1>
                    <h2>
                        Send you favory playlist from diferent sites,
                        your social networks or just a shhopping car from diferent stores!
                    </h2>
                    <button >
                        Chain links!
                    </button>
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