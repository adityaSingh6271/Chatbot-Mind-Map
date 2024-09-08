import './App.css';
import Sidebar from './components/Sidebar';
import AddData from './components/AddData';
import Header from './components/Header';
import { TourProvider } from './context/TourProvider';
import GuidedTour from './components/GuidedTour';
import DataTable from './components/DataTable';

function App() {
  return (
    <TourProvider>
      <div className="">
        <Sidebar />
        <Header />
        <AddData />
        <DataTable/>
        <GuidedTour />
      </div>
    </TourProvider>
  );
}

export default App;
