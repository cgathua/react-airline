
import { reviews } from './Reviews'
import { useState } from 'react'
import ReviewsImg from '/images/8426450_3918989.webp'

type DestructureObject = {
    profile: string,
    name: string,
    occupation: string,
    review: string,
    alt: string
}

function Testimonials(): JSX.Element {

    const [index, setIndex] = useState(0);
    const { profile, name, occupation, review, alt }: DestructureObject = reviews[index]

    const previousSlide = (): void => {
        setIndex(prevSlide => prevSlide - 1);

        if (index <= 0) {
            setIndex(reviews.length - 1);
        };
    };

    const nextSlide = (): void => {
        setIndex(prevSlide => prevSlide + 1);

        if (index >= reviews.length - 1) {
            setIndex(0);
        };
    };

    return (
        <>
            <section id="testimonial" className="container ReviewsContainer" aria-label='testimonials'>
                <h2>Testimonials</h2>
                <figure className="container" aria-label='testimonials content'>
                    <figure className="ReviewArticle" aria-label='review'>
                        <picture className="Image">
                            <img
                                src={profile}
                                width="640"
                                height="640"
                                alt={alt}
                                className="ProfilePic"
                            />
                        </picture>
                        <h3>{name}</h3>
                        <small>{occupation}</small>
                        <figcaption className='Review'>{review}</figcaption>
                        <button className='SliderButton'>
                            <svg
                                aria-label='left arrow'
                                onClick={previousSlide}
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#333434"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>
                            </svg>
                            <svg
                                aria-label='right arrow'
                                onClick={nextSlide}
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#333434"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </button>
                    </figure>

                    <img
                        src={ReviewsImg}
                        alt='airplane'
                        width={1000}
                        height={1000}
                        loading='lazy'
                    />
                </figure>
            </section>
        </>
    )
};

export default Testimonials