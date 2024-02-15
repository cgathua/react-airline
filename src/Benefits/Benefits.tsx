import { CreditCardIcon } from "./CreditCardIcon"
import { LuggageIcon } from "./LuggageIcon"
import { CurbsideIcon } from "./CurbsideIcon"
import { WifiIcon } from "./WifiIcon"
import { PassengerIcon } from "./PassengerIcon"
import { SaleIcon } from "./SaleIcon"

function Benefits(): JSX.Element {
    return (
        <>
            <section id="benefits" aria-label="benefits">
                <h2>Benefits</h2>
                <figure className="container" aria-label="benefits content">
                    <article className="BenefitsArticle">
                        <LuggageIcon />
                        <h3>No Baggage Fees</h3>
                    </article>

                    <article className="BenefitsArticle">
                        <CurbsideIcon />
                        <h3>Free Curbside CheckIn</h3>
                    </article>

                    <article className="BenefitsArticle">
                        <WifiIcon />
                        <h3>Free In-Flight Wifi</h3>
                    </article>

                    <article className="BenefitsArticle">
                        <CreditCardIcon />
                        <h3>Credit Card Rewards</h3>
                    </article>

                    <article className="BenefitsArticle">
                        <PassengerIcon />
                        <h3>Frequent Flyer Miles</h3>
                    </article>

                    <article className="BenefitsArticle">
                        <SaleIcon />
                        <h3> Sales For Flights</h3>
                    </article>
                </figure>
            </section>
        </>
    )
};

export default Benefits