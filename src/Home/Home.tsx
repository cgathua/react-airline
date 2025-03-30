
import MediumImg from '/images/4327377_18780w693.webp'
import LargeImg from '/images/4327377_18780w1386.webp'
import DefaultImg from '/images/4327377_18780w1386.jpg'


function Home(): JSX.Element {
    return (
        <>
            <section id="home" aria-label='home'>
                <figure className="container" aria-label='home content'>
                    <img
                        src={DefaultImg}
                        srcSet={`${MediumImg} 693w, ${LargeImg} 1386w, ${DefaultImg} 1386w`}
                        alt="airplane"
                        width={1386}
                        height={1125}
                        className='HomeImage'
                    />
                    <article className="HomeArticle">
                        <h1>Affordable Regional Flights</h1>
                        <p>We offer daily flights from Hartesfield-Jackson Atlanta International Airport, to Miami International Airport.</p>
                        <p>Our Airline is trusted by thousands of passengers since 2002 and highly rated by our customers, at Better Business Bureau.</p>
                        <a className='btn' href="#booking" aria-label='Book Now'>Book Now</a>
                    </article>
                </figure>
            </section>
        </>
    )
};

export default Home