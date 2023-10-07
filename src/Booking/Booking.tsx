import { ProfileIcon } from "./ProfileIcon"
import { DepartureIcon } from "./DepartureIcon"
import { ArrivalIcon } from "./Arrivalicon"
import { DateIcon } from "./DateIcon"
import { TimeIcon } from "./TimeIcon"
import { EmailIcon } from "./Emailicon"

function Booking() {
    return (
        <>
            <section id="booking">
                <h2>Book Flight</h2>
                <div className="container">
                    <form action="booking form" method="post" className="form">
                        <fieldset>
                            <legend>
                                <label id="name"> <ProfileIcon /> Passenger Name <input type="text" name="Passenger Name" aria-label="official name" required autoComplete='on' /></label>
                                <label id="email"> <EmailIcon /> Email <input type="email" name="Email Address" aria-labelledby="email" required /></label>
                                <label id="departure"> <DepartureIcon /> Departure
                                    <select name="DepartureMenu">
                                        <option value="">(select one)</option>
                                        <option value="1">Miami</option>
                                        <option value="2">Atlanta</option>
                                    </select>
                                </label>
                                <label id="arrival"> <ArrivalIcon /> Arrival
                                    <select name="ArrivalMenu">
                                        <option value="">(select one)</option>
                                        <option value="1">Miami</option>
                                        <option value="2">Atlanta</option>
                                    </select>
                                </label>
                                <label id="date"> <DateIcon /> Date <input type="date" name="Schedule Date" aria-labelledby="date" required /></label>
                                <label id="time"> <TimeIcon /> Time <input type="time" name="Schedule Time" aria-labelledby="time" required /></label>
                            </legend>
                        </fieldset>
                        <input type="submit" id="submit" value="book flight" />
                    </form>
                </div>
            </section>
        </>
    )
};

export default Booking