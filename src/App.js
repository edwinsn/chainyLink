import './Assets/css/App.css';
import './Assets/css/layout.css';
import './Assets/css/tags.css';
import './Assets/css/colors.css';
import './Assets/css/sizes.css';
import './Assets/css/links.css'
import './Assets/css/general.css';
import './Assets/css/animations.css';
import './Assets/css/loading.css'
import Routes from './Routes';
import { useSelector } from 'react-redux'
import useTextColor from './hooks/useTextColor';

function App() {

  const color = useSelector(state => state.backgroundColor)
  const textColor = useTextColor()


  return (
    <div style={{ backgroundColor: color, color: textColor }}>
      <Routes />
    </div>
  );
}

export default App;