/* eslint-disable */
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservation } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';

function MyReservation() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.dravelReducer.reservations);
  const items = useSelector((state) => state.dravelReducer.items);
  const token = useSelector((state) => state.dravelReducer.user);
  console.log(items)
  useEffect(() => {
    axios.get('https://dravel-api.herokuapp.com/trips/1/reservations', { headers: {"Authorization" : token} })
    .then(function (response) {
      //console.log(response);
      if (response.status === 200) {

        dispatch(fetchReservation(response.data));
      }

    }).catch(function (error) {
      console.log(error)
    });

  }, []);
  return (
    <>
      <div className="delete-container">
        <div className="nav">
          <Navigation />
        </div>
        <div className="delete-content">
          <h1 className="p-4 text-center">MyReservation</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">item name</th>
                <th scope="col">date</th>
                <th scope="col">city</th>
              </tr>
            </thead>
            <tbody>
              {
                /* eslint-disable */
                reservations.map((reservation,index) => (
                  <tr key={index}>
                    <th scope="row">1</th>
                    <td>
                      {items.find(obj => {
                        return obj.id === reservation.trip_id
                      }).name}
                    </td>
                    <td>{reservation.date}</td>
                    <td>{items.find(obj => {
                      return obj.id === reservation.trip_id
                    }).destination}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyReservation;
