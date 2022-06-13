import Navigation from '../components/navigation';
import '../scss/delete.scss';

function deletePage() {
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
                <th scope="col">item</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <span className="btn btn-danger">
                    Delete
                    <i className="fa fa-trash ms-1" aria-hidden="true" />
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <span className="btn btn-danger">
                    Delete
                    <i className="fa fa-trash ms-1" aria-hidden="true" />
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                  <span className="btn btn-danger">
                    Delete
                    <i className="fa fa-trash ms-1" aria-hidden="true" />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default deletePage;
