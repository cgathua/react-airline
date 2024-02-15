
function Footer(): JSX.Element {
    return (
        <>
            <footer>
                <section id="footer-main">
                    <article className="footer-column">
                        <h2 className="footer-title">Permalinks</h2>
                        <ul aria-label="secondary navigation">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#benefits">Benefits</a></li>
                            <li><a href="#testimonial">Testimonials</a></li>
                            <li><a href="#faq">FAQs</a></li>
                            <li><a href="#booking">Book Flight</a></li>
                        </ul>
                    </article>
                    <article className="footer-column">
                        <h2 className="footer-title">Photo Credit</h2>
                        <ul>
                            <li><a href="https://www.freepik.com/free-psd/plane-mockup_2559290.htm" rel="noreferrer" target="_blank" >Freepik.com</a></li>
                            <li><a href="https://www.freepik.com/free-psd/plane-mockup_2559294.htm" rel="noreferrer" target="_blank" >Freepik.com</a></li>
                            <li><a href="https://unsplash.com/photos/6xQFm9TFwmk" target="_blank">Unsplash.com</a></li>
                            <li><a href="https://www.pexels.com/photo/photo-of-woman-in-black-top-and-black-hat-1644924/" target="_blank">Pexels.com</a></li>
                            <li><a href="https://www.pexels.com/photo/surprised-young-woman-in-park-on-sunny-day-4574925/" target="_blank">Pexels.com</a></li>
                            <li><a href="https://www.pexels.com/photo/close-up-shot-of-a-woman-looking-sideways-14587417/" target="_blank">Pexels.com</a></li>
                        </ul>
                    </article>
                    <address className="footer-column">
                        <h2 className="footer-title">Contact</h2>
                        <ul>
                            <li>
                                <svg 
                                    aria-label="mail icon"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24"
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round" 
                                    className="feather feather-mail">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                    </path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <a href="#"> support@logo.com</a>
                            </li>
                            <li>
                                <svg 
                                    aria-label="phone icon" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24"
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round"
                                    strokeLinejoin="round" 
                                    className="feather feather-phone">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                </svg> (1-800)book-now
                            </li>
                            <li>
                                <svg
                                    aria-label="map icon"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="feather feather-map-pin">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
                                    </path><circle cx="12" cy="10" r="3"></circle>
                                </svg> Atlanta, Georgia
                            </li>
                        </ul>
                    </address>
                    <article className="footer-column">
                        <h2 className="footer-title">Get Vouchers</h2>
                        <p>Subscribe to our mailing list.</p>
                        <form action="newsletter" aria-label="signup">
                            <label id="email-label" className="label" aria-labelledby="footer-email"><input id="footer-email" type="email" name="email" placeholder="Enter your email" required
                                aria-label="enter your email" autoComplete="email" />
                            </label>
                            <label id="submit-btn" aria-labelledby="submit-btn"><input type="submit" value="Subscribe" /></label>
                        </form>
                    </article>
                </section>

                <section id="footer-socials" aria-label="social media">
                    <ul className="footer-icons">
                        <li><a href="https://www.facebook.com/" target="_blank">
                            <svg 
                                aria-label="facebook" 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16"
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#983335" 
                                strokeWidth="2"
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="feather feather-facebook">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank">
                                <svg 
                                    aria-label="twitter" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="16" 
                                    height="16"
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="#983335" 
                                    strokeWidth="2"
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="feather feather-twitter">
                                    <path
                                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li><a href="https://www.instagram.com/" target="_blank">
                            <svg 
                                aria-label="instagram" 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16"
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#983335" 
                                strokeWidth="2"
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="feather feather-instagram">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        </li>
                        <li><a href="https://github.com/" target="_blank">
                            <svg 
                                aria-label="github" 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16"
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#983335" 
                                strokeWidth="2"
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="feather feather-github">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                        </a>
                        </li>
                        <li><a href="https://www.linkedin.com/" target="_blank">
                            <svg 
                                aria-label="linkedin" 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16"
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#983335" 
                                strokeWidth="2"
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="feather feather-linkedin">
                                <path
                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        </li>
                        <li><a href="#home">
                            <svg 
                                aria-label="home" 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16"
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="#983335" 
                                strokeWidth="2"
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </a>
                        </li>
                    </ul>
                </section>

                <section id="footer-legal" aria-label="legal">
                    <small>
                        <ul className="footer-legal-items">
                            <li><a href="#" aria-label="see terms & conditions">Terms &amp; Conditions</a></li>
                            <li><a href="#" aria-label="see privacy policy">Privacy Policy</a></li>
                            <li>Made by <a href="https://cgathua.pages.dev/" target="_blank">@cgathua</a></li>
                        </ul>
                    </small>
                </section>
            </footer>
        </>
    )
};

export default Footer