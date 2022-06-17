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
            src={item.item.image}
            alt=""
            height={500}
            width={500}
          />
        </div>
        <div className="booking-section">
          <div className="title">
            {item.item.name}
            <span className="sub-title">{item.item.description}</span>
            <span className="sub-title">{item.item.destination}</span>
          </div>
          <div className="fee">
            <span>Booking</span>
            <span>
              $
              {item.item.price}
            </span>
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
