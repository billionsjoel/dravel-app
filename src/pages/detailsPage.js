import { useLocation } from 'react-router-dom';
import Navigation from '../components/navigation';
import '../scss/details.scss';

function DetailsPage() {
  const location = useLocation();
  const item = location.state;
  return (
    <>
      <div className="details">
        <div className="menu">
          <Navigation />
        </div>
        <div className="image">
          <img
            className="details-img"
            src={item.item.img}
            alt=""
            height={500}
            width={500}
          />
        </div>
        <div className="booking-section">
          <div className="title" data-testid="app-title">
            Product heading
            <span className="sub-title">Product details</span>
          </div>
          <div className="fee">
            <span>Booking</span>
            <span>$1000</span>
          </div>
          <div className="fee">
            <span>Ticket</span>
            <span>$1000</span>
          </div>
          <div className="fee">
            <span>Duration</span>
            <span>40 Days</span>
          </div>
          <div className="btn btn-success mt-4">
            <i className="fa fa-floppy-o" aria-hidden="true" />
            Reserve
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
