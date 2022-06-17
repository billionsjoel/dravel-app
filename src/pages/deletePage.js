/* eslint-disable */
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/dravelStore/dravelStore';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/navigation';
import '../scss/delete.scss';

function deletePage() {
  const items = useSelector((state) => state.dravelReducer.items);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.dravelReducer.user);

  const handleDelete = (e) => {
    axios.delete(`https://dravel-api.herokuapp.com/trips/${e.target.value}`,
    { headers: {"Authorization" : token} }

  )
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {

        dispatch(deleteItem(e.target.value));

      }

    }).catch(function (error) {
      console.log(error)
    });
  };
  return (
    <>
      <div className="delete-container">
        <div className="nav">
          <Navigation />
        </div>
        <div className="delete-content">
          <h1 className="p-4 text-center">Delete Dravel Trips</h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {
								/* eslint-disable */
								items.map((item, index) => (
									<tr key={index}>
										<th scope="row">{index+1}</th>
										<td>{item.name}</td>
										<td>
												<button
													className="btn btn-danger btn-sm w-100 d-flex justify-content-center align-items-center"
													onClick={(e)=> {handleDelete(e)}}
													value={item.id}
												>
													Delete
													<i className="fa fa-trash ms-1" aria-hidden="true" />
												</button>
										</td>
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

export default deletePage;
