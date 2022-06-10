import Navigation from '../components/navigation';
import ItemsContainer from '../components/homepage/itemsContainer';

function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="menu">
          <Navigation />
        </div>
        <div className="home-content">
          <ItemsContainer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
