import React from 'react';

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
};

const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  const position = React.useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    // add for reflow or reposition on resize or scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, deps);
};

const EventItem = (props) => {
  const timeItem = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);

  const checkElement = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  React.useEffect(() => {
    setIsVisible(checkElement(timeItem.current));
  }, []);

  useScrollPosition(({ currPos }) => {
    setIsVisible(checkElement(timeItem.current));
  });
  const { date, content, role, company, location } = props;
  return (
    <li ref={timeItem} className={isVisible ? 'inView' : null}>
      <div>
        <time>
          {date.from} - {date.to}
        </time>
        <h4 className="job-title">{role}</h4>
        <h3 className="company">{company}</h3>
        <p>
          <i>{location}</i>
        </p>
        <p className="description">{content}</p>
      </div>
    </li>
  );
};

export default EventItem;
