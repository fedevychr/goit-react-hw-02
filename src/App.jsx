import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Feedback from './components/Feedback/Feedback';
import { useEffect, useState } from 'react';

const initialFeedbacks = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const stringifiedFeedbacks = localStorage.getItem('feedbacksValues');
    const parsedFeedbacks =
      JSON.parse(stringifiedFeedbacks) ?? initialFeedbacks;
    return parsedFeedbacks;
  });

  const updateFeedback = feedbackType => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedbacks(initialFeedbacks);
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback =
    totalFeedback &&
    Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedbacksValues', JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
