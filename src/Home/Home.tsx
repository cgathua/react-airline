import SmallImg from '/images/2559290_1053(480w).webp'
import MediumImg from '/images/2559290_1053(960w).webp'
import LargeImg from '/images/2559290_1053(1920).webp'
import DefaultImg from '/images/2559290_1053(1920).jpg'

function Home(): JSX.Element {
    return (
        <>
            <section id="home" aria-label='home section'>
                <div className="container">
                    <img
                        srcSet={`${SmallImg} 480w, ${MediumImg} 960w, ${LargeImg} 1920w, ${DefaultImg} 1920w`}
                        src={DefaultImg}
                        alt="airplane" 
                        width={1920}
                        height={1080}
                        className='HomeImage'
                    />
                    <article className="HomeArticle">
                        <h1>Affordable Regional Flights</h1>
                        <p>We offer daily flights from Hartesfield-Jackson Atlanta International Airport, to Miami International Airport.</p>
                        <p>Trusted by thousands of passengers since 2002.</p>
                        <a className='btn' href="#booking" aria-label='link to booking section'>Book Now</a>
                    </article>
                </div>
            </section>
        </>
    )
};

export default Home