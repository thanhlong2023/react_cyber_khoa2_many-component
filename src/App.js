import logo from './logo.svg';
import './App.css';
import dataJson from './Data/data.json'

import ProductList from './Props/Product/ProductList';

function App() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-4">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
            <a className="nav-link" id="v-pills-shop-tab" data-toggle="pill" href="#v-pills-shop" role="tab" aria-controls="v-pills-shop" aria-selected="false">Shop</a>
          </div>


        </div>
        <div className="col-8 productList">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <ProductList arrProduct={dataJson} />
            </div>
            <div className="tab-pane fade" id="v-pills-shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">Shop</div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
