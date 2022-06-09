import Navigation from '../components/navigation';
import '../scss/details.scss';

function DetailsPage() {
  return (
    <>
      <div className="details">
        <div className="menu">
          <Navigation />
        </div>
        <div className="image">
          <img
            className="details-img"
            src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt=""
            height={500}
            width={500}
          />
        </div>
        <div className="booking-section"> Booking details </div>
      </div>
    </>
  );
}

export default DetailsPage;
