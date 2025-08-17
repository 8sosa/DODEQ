import React, { useState } from "react";
import "./Events.css";
import { HeroSection } from "../Components/Hero";
import HeroImage from "../Components/Events/assets/hero.jpeg";
import Placeholder from "../Images/ph.png"

export default function EventsPage() {
  const [view, setView] = useState("list");

  const upcomingEvents = [
    {
      date: { month: "JUN", day: "23" },
      image: Placeholder,
      title: "Title of the Risen Event",
      location: "1015 California Ave, Los Angeles CA",
      time: "7:00 pm — 8:00 pm",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "risen-event"
    },
    {
      date: { month: "JUL", day: "04" },
      image: Placeholder,
      title: "Fourth of July Dinner",
      location: "1015 California Ave, Los Angeles CA",
      time: "7:00 pm — 8:00 pm",
      description: "Nam dignissim eu turpis non hendrerit. Nunc nec luctus tellus.",
      slug: "fourth-of-july-dinner"
    },
    {
      date: { month: "AUG", day: "30" },
      image: Placeholder,
      title: "Seafood Gathering",
      location: "1015 California Ave, Los Angeles CA",
      time: "7:00 pm — 8:00 pm",
      description: "Enjoy fresh seafood and fellowship by the sea.",
      slug: "seafood-gathering"
    }
  ];

  return (
    <main className="font-sans text-gray-800">
      <HeroSection 
        title="EVENTS"
        description="Risen seeks to actively engage our community with fellowship and love. Below you will find a list of upcoming events that you can attend, volunteer, and share with others."
        backgroundImage={HeroImage}
      />

      <section className="max-w-4xl mx-auto eventsSection fade-in">
        <div className="flex justify-between items-center mb-6 toggle-buttons">
          <h2 className="text-xl font-semibold mb-5">Upcoming Events</h2>
          <div className="mb-5">
            <button 
              onClick={() => setView("list")} 
              className={view === "list" ? "active" : ""}
            >
              LIST
            </button>
            <button 
              onClick={() => setView("month")} 
              className={view === "month" ? "active" : ""}
            >
              MONTH
            </button>
          </div>
        </div>

        {view === "list" ? (
          <div>
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="event-item fade-in-up">
                <div className="event-date">
                  <div className="month">{event.date.month}</div>
                  <div className="day">{event.date.day}</div>
                </div>
                <div className="event-details">
                  <img src={event.image} alt={event.title} />
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.location}<br />{event.time}</p>
                    <p>{event.description}</p>
                    <a href={`/events/${event.slug}`}>View Event Details →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="fade-in">
            {["JUN", "JUL", "AUG"].map((month) => (
              <div key={month}>
                <h3 className="text-lg font-semibold mb-4">{month} 2025</h3>
                {upcomingEvents.filter(e => e.date.month === month).map((event, idx) => (
                  <div key={idx} className="event-item fade-in-up">
                    <div className="event-date">
                      <div className="month">{event.date.month}</div>
                      <div className="day">{event.date.day}</div>
                    </div>
                    <div className="event-details">
                      <img src={event.image} alt={event.title} />
                      <div>
                        <h3>{event.title}</h3>
                        <p>{event.location} – {event.time}</p>
                        <p>{event.description}</p>
                        <a href={`/events/${event.slug}`}>View Event Details →</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="previous-events">
          <a href="/yvies-event/archive">← Previous Events</a>
        </div>
      </section>
    </main>
  );
}
