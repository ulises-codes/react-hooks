import { MutableRefObject, useEffect, useRef } from 'react';

type ResizeObserverProps = {
  callback<T>(params: T): void;
  element: MutableRefObject<HTMLElement>;
};

export default function useResizeObserver({
  callback,
  element,
}: ResizeObserverProps) {
  const observer = useRef() as MutableRefObject<ResizeObserver>;

  useEffect(() => {
    observe();
    observer.current = new ResizeObserver(callback);

    return () => {
      if (observer && observer.current && element && element.current) {
        observer.current.unobserve(element.current);
      }
    };
  }, [element.current, observer]);

  const observe = () => {
    if (element && element.current && observer.current) {
      observer.current.observe(element.current);
    }
  };
}
