import Practice from "./components/practice/Practice"
import ProductListing from "./components/product-listing/ProductListing";
import FeaturedProduct from "./components/featured-product/FeaturedProduct";
import './variables.scss'
import './App.css'
function App() {
  return (
    <div className="App">
      {/* <Practice/> */}
      <ProductListing />
      <FeaturedProduct />
    </div>
  );
}

export default App;
