import { useEffect, useState } from 'react';
import ListView from './pages/ListView';
import MapView from './pages/MapView';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions';
import SideDetail from './components/SideDetail';

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  // uçuşları getirir
  useEffect(() => {
    dispatch(getFlights());
  }, []);

  // haritayı açar ve detaylarınız göstericeğimi uçağın id'sini alır
  const openDetail = (id) => {
    // detaylarınız göstericeğimi uçağın id'sini alır
    setDetailId(id);
    // haritayı açar
    setShowDetail(true);
  };

  return (
    <>
      <Header />
      {/* yan detay alanı */}
      {showDetail && (
        <SideDetail
          detailId={detailId}
          setShowDetail={setShowDetail}
        />
      )}

      <div className="view-buttons">
        <button
          className={showMapView ? 'active' : ''}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!showMapView ? 'active' : ''}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {/* hangi bileşenin ekrana basılacağına karar verme */}
      {showMapView ? (
        <MapView
          openDetail={openDetail}
          setShowDetail={setShowDetail}
        />
      ) : (
        <ListView
          openDetail={openDetail}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
}

export default App;
