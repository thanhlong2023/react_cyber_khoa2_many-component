import logo from './logo.svg';
import './App.css';
import dataJson from './Data/data.json'

import ProductList from './Props/Product/ProductList';
import DanhSachSanPham from './Props/CallBackFuntion/DanhSachSanPham';

function App() {
  return (
    <DanhSachSanPham />
  );
}

export default App;
