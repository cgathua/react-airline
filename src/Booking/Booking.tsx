import { ProfileIcon } from "./ProfileIcon"
import { DepartureIcon } from "./DepartureIcon"
import { ArrivalIcon } from "./Arrivalicon"
import { DateIcon } from "./DateIcon"
import { TimeIcon } from "./TimeIcon"
import { EmailIcon } from "./Emailicon"

function Booking() {
    return (
        <>
            <section id="booking" aria-label="booking">
                <h2>Book Flight</h2>
                <figure className="container" aria-label="booking content">
                    <form action="booking form" method="post" className="form">
                        <fieldset>
                            <legend>
                                <label id="name"> <ProfileIcon aria-label='profile icon' /> Passenger Name <input type="text" name="Passenger Name" title="first and last name, separated by a gap" aria-label="official name" autoComplete='on' pattern="(^[a-zA-Z]{1,15} [a-zA-Z]{1,15}$)" required /></label>
                                <label id="email"> <EmailIcon aria-label='email icon' /> Email <input type="email" name="Email Address" aria-labelledby="email" required autoComplete="email" /></label>
                                <label id="departure"> <DepartureIcon aria-label='departure icon' /> Departure
                                    <select name="DepartureMenu">
                                        <option value="">(select one)</option>
                                        <option value="1">Miami</option>
                                        <option value="2">Atlanta</option>
                                    </select>
                                </label>
                                <label id="arrival"> <ArrivalIcon aria-label='arrival icon' /> Arrival
                                    <select name="ArrivalMenu">
                                        <option value="">(select one)</option>
                                        <option value="1">Miami</option>
                                        <option value="2">Atlanta</option>
                                    </select>
                                </label>
                                <label id="date"> <DateIcon aria-label='date icon' /> Date <input type="date" name="Schedule Date" aria-labelledby="date" required /></label>
                                <label id="time"> <TimeIcon aria-label='time icon' /> Time <input type="time" name="Schedule Time" aria-labelledby="time" required /></label>
                            </legend>
                        </fieldset>
                        <label className="label1" title="book flight"><input type="submit" id="submit" value="book flight" aria-label="submit button" /></label>
                    </form>
                </figure>
            </section>
        </>
    )
};

export default Booking