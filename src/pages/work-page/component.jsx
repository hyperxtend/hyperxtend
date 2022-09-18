import React from 'react';
import './component.css';
import PageHeader from '../../components/page-header';
import { events } from '../../global';

import EventItem from '../../components/event-item/component';

const Timeline = (props) => {
  const scrollArea = React.useRef();

  const makeTimeline = (events) => {
    const eventList = props.events.map((item) => {
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
    return <ul>{eventList}</ul>;
  };
  return (
    <div className="wrapper" ref={scrollArea}>
      <section className="header">
        <div className="container">
          <PageHeader
            title="Work Experiences"
            description="timeline of my career"
          />
        </div>
      </section>

      <section className="timeline">
        <ul>{makeTimeline(events)}</ul>
      </section>
    </div>
  );
};

const WorkPage = () => {
  return <Timeline events={events} />;
};

export default WorkPage;
