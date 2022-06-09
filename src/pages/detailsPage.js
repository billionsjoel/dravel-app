import { useLocation } from 'react-router-dom';
import Navigation from '../components/navigation';

function DetailsPage() {
  /* eslint-disable */
  const location = useLocation();
  const item = location.state.item;
  return (
    <div>
      <Navigation />
      <p>{item.name}</p>
    </div>
  );
}

export default DetailsPage;
