import { useLocation } from 'react-router-dom';
import Navigation from '../components/navigation';

function DetailsPage() {
  const location = useLocation();
  const item = location.state;
  console.log(item);
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default DetailsPage;
