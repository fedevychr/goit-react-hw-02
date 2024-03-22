import { useEffect } from 'react';

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Reset') {
        return;
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [resetFeedback]);

  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback !== 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
