import './Assets/css/App.css';
import './Assets/css/layout.css';
import './Assets/css/tags.css';
import './Assets/css/colors.css';
import './Assets/css/sizes.css';
import './Assets/css/links.css'
import './Assets/css/general.css';
import './Assets/css/animations.css';
import Routes from './Routes';
import { useSelector } from 'react-redux'

function App() {

  const color = useSelector(state => state.backgroundColor)

  return (
    <div style={{ backgroundColor: color }}>
      <Routes />
    </div>
  );
}

export default App;