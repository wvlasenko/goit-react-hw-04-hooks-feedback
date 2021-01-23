import useStates from './components/Hooks/useStates';
import OptionList from './components/OptionList/OptionList';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Section from './components/Section';
import './App.css';

export default function App() {
  const options = ['good', 'neutral', 'bad'];
  const [good, updateGood] = useStates(0);
  const [bad, updateBad] = useStates(0);
  const [neutral, updateNeutral] = useStates(0);
  const arrayOfFunctions = [updateGood, updateBad, updateNeutral];

  const total = good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <OptionList options={options} arrayOfFunctions={arrayOfFunctions} />
      </Section>

      {total === 0 ? (
        <Notification massage={'No feedback given'} />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
}
