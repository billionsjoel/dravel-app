import '../scss/reservation.scss';
import { Link } from 'react-router-dom';

function ReservationPage() {
  return (
    <>
      <div className="r-container">
        <div className="r-title">
          <h3>RESERVE A DRAVEL</h3>
        </div>
        <hr />
        <div className="r-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            reprehenderit maxime? Placeat a iste explicabo maiores! Nisi fugit
            dolorem neque explicabo vitae. Minima minus doloremque sunt sit sed!
            Reiciendis, eligendi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sapiente earum sed delectus, consectetur iure doloribus, unde enim
          </p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="r-cta">
          <select name="" id="">
            <option value="">Kampala</option>
            <option value="">London</option>
            <option value="">Russia</option>
            <option value="">Lusaka</option>
          </select>
          <button type="button">
            <Link to="/reserve" className="btn">Reserve Now </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default ReservationPage;
