import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:5001/products')

      .then((response) => {

        setProducts(response.data);

      })

      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <div>

      <h1>Flipkart Clone</h1>

      {

        products.map((product) => (

          <div key={product._id}>

            <h2>{product.name}</h2>

            <p>₹ {product.price}</p>

          </div>

        ))

      }

    </div>

  );

}

export default App;