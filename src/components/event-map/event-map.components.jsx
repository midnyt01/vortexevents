// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Slide from 'react-reveal/Slide';
import "./event-map.styles.css";

const EventMapArray = [
  {
    Date: "1st Jan",
    Title: "Jashn-E-Kalakar  @ Food Flora",
  },
  {
    Date: "12th Jan",
    Title: "National Youth Day",
  },
  {
    Date: "18th Jan",
    Title: "Donation Camp",
  },
  {
    Date: "26th Jan",
    Title: "Republic Day",
  },
  {
    Date: "02nd Feb",
    Title: "School & College Competitions",
  },
  {
    Date: "11th Feb",
    Title: "International Artist Reveal",
  },
  {
    Date: "14th Feb",
    Title: "Ticket Sale starts",
  },
  {
    Date: "28th March",
    Title: "Prep for Main Event",
  },
  {
    Date: "20th April",
    Title: "Prep for Main Event",
  },
  {
    Date: "23rd April",
    Title: "Final Event",
  },
];

const Eventmap = () => {
  return (
    <div>
      <div className="container-fluid m-auto">
        <h2 className="light-text mt-5 mb-4">Event Schedule</h2>
        <div className="event-timeline mt-2 mb-5">
          <ul className="light-text">
            {EventMapArray.map((event) => {
              return (
                <li>
                  <div className="event-context">
                    <FontAwesomeIcon
                      className="context-arrow"
                      icon="fa-solid fa-caret-left"
                    />
                    <p>{event.Date}</p>
                    <span>{event.Title}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <Link to="/events" className="btn cta-btn-text gallery-btn mb-3">
          All Events
        </Link>
      </div>
    </div>
  );
};

export default Eventmap;
