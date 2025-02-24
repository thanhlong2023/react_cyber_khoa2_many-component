import logo from './logo.svg';
import './App.css';
import dataJson from './Data/data.json'

import ProductList from './Props/Product/ProductList';
import DanhSachSanPham from './Props/CallBackFuntion/DanhSachSanPham';
import ExerciseCarStore from './ExerciseCarStore/ExerciseCarStore';

function App() {
  return (
    <ExerciseCarStore />
  );
}

export default App;
