import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';

function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = feedbackType => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  console.log('totalFeedback: ', totalFeedback);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
      <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} />
    </div>
  );
}

export default App;
