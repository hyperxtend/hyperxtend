import React from 'react';
import EventItem from '../event-item';
import { events } from '../../global';

const Timeline = (props) => {
  const scrollArea = React.useRef();

  const makeTimeline = (events) => {
    const evlist = props.events.map((item) => {
      return (
        <EventItem
          date={item.date}
          content={item.content}
          role={item.role}
          company={item.company}
          location={item.location}
          key={`${item.time}`}
        />
      );
    });
    return <ul>{evlist}</ul>;
  };

  return (
    <div className="wrapper" ref={scrollArea}>
      <section className="header">
        <div className="container">
          <h1>Atomic Discoveries</h1>
          <p>Timeline of discoveries though the Atomic Age</p>
        </div>
      </section>

      <section className="timeline">
        <ul>{makeTimeline(events)}</ul>
      </section>
    </div>
  );
};

export default Timeline;
