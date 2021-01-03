import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useWindowSize, useDevice } from '../src';

const App = () => {
  const { width, height } = useWindowSize();
  const { userAgent, device } = useDevice();

  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  return (
    <div ref={ref} style={{ height: `100%`, width: `100%` }}>
      <h1>Width: {width}</h1>
      <h1>Device: {device}</h1>
      <h1>User Agent: {userAgent}</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
