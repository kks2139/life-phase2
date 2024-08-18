import Welcome from './components/pages/Welcome';
import styles from './App.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className={cn('App')}>
      <Welcome />
    </div>
  );
}

export default App;
