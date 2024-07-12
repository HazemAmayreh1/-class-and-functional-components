import ClassGreeting from '../React.Component/class';
import FunctionGreeting from '../React.Component/funaction';

const App = () => {
  return (
  <>
    <div className='classgreeting'>
      <ClassGreeting name="Hazem" message="Welcome to my website!" />
    </div>
      <div className='functiongreeting'>
      <FunctionGreeting name="Saif" message="nice to meet you !" />
    </div>

  </>
  );
};
export default App;
