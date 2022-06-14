/* eslint-disable no-tabs */
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../redux/dravelStore/dravelStore';
import Navigation from '../components/navigation';
import '../scss/delete.scss';

function deletePage() {
  const items = useSelector((state) => state.dravelReducer.items);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    dispatch(deleteItem(e.target.value));
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
                <th scope="col">des</th>
                <th scope="col">img url</th>
              </tr>
            </thead>
            <tbody>
              {
								/* eslint-disable */
								items.map((item, index) => (
									<tr key={index}>
										<th scope="row">1</th>
										<td>{item.name}</td>
										<td className='w-75'>{item.des}</td>
										<td>later</td>
										<td>
												<button
													className="btn btn-danger btn-sm w-100 d-flex justify-content-center align-items-center"
													onClick={handleDelete}
													value={item.name}
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
