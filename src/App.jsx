import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
  const feedbacks = { good: 0, neutral: 0, bad: 0 };

  return (
    <div>
      <Description />
      <Options />
      <Feedback feedbacks={feedbacks} />
    </div>
  );
}

export default App;
