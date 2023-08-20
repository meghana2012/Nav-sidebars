
import './App.css';
import Header from './components/sideMenu/Header';
import { Space } from 'antd';
import PageContent from './components/sideMenu/pageContent';
import Footer from './components/sideMenu/Footer';
import Sidebar from './components/sideMenu/sidebar.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Space className='sidebar-position'>
        <Sidebar/>
        <PageContent/>
      </Space>
      <Footer/>
    </div>
  );
}

export default App;
