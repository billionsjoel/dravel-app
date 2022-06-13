import Navigation from '../components/navigation';

const Reserve = () => {
  console.log('hi');
  return (
    <>
      <div className="delete-container">
        <div className="nav">
          <Navigation />
        </div>
        <div className="delete-content">
          <h1 className="p-4 text-center">Reserve now</h1>

        </div>
      </div>
    </>
  );
};

export default Reserve;
