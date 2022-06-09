import { useSelector } from 'react-redux';
import Navigation from '../components/navigation';

function ReservationPage() {
  const reservations = useSelector((state) => state.dravelReducer.reservations);
  console.log(reservations);
  return (
    <div>
      <p>Reservation page</p>
      <Navigation />
      {
      /* eslint-disable */
        reservations.map((reservation,index) => (
          <div key={index}>
            <p>{reservation.itemName}</p>
            <p>{reservation.date}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ReservationPage;
