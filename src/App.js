import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    {
      productImage:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735",
      productName: "apple smartwatch",
      rating: "⭐⭐⭐⭐⭐",
      price: "Rs 25000",
    },
    {
      productImage:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-44mm-431015-sm-r915fzbainu-thumb-533187316?$344_344_PNG$",
      productName: "samsung smartwatch",
      rating: "⭐⭐⭐⭐",
      price: "Rs 15000",
    },
    {
      productImage:
        "https://image01.realme.net/general/20220609/1654748329243.png",
      productName: "realme smartwatch",
      rating: "⭐⭐⭐",
      price: "Rs 12000",
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61C32Tn1a+L._AC_SS450_.jpg",
      productName: "boat smartwatch",
      rating: "⭐⭐⭐⭐",
      price: "Rs 10000",
    },
    {
      productImage:
        "https://fonebook.cdn.betanet.in/fonebook/wp-content/uploads/2022/12/Fire-Bolt-Bsw001-Pink-Smart-Watch-01-gujarat-india-ahamedabad-surat-valsad-vapi-mehsana-palanpur-rajkot-buy-online-at-lowest-price.jpg",
      productName: "fireboltt smartwatch",
      rating: "⭐⭐⭐",
      price: "Rs 8000",
    },
    {
      productImage:
        "https://img3.yun300.cn/repository/image/748403ef-38eb-44c4-96fd-573671abb2f4.jpg?tenantId=255679&viewType=1&k=1676282048000",
      productName: "Dizo smartwatch",
      rating: "⭐⭐⭐⭐",
      price: "Rs 5000",
    },
    {
      productImage: "https://www.mivi.in/assets/model-e/green.png",
      productName: "Mivi smartwatch",
      rating: "⭐⭐⭐",
      price: "Rs 2500",
    },
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/0040/4396/4531/products/B09WKTQ1YF.MAIN_300x_crop_top.png?v=1651144036",
      productName: "oppo smartwatch",
      rating: "⭐⭐⭐",
      price: "Rs 2000",
    },
  ];

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="cart-value">
        <Badge bg="success">CART {count}</Badge>
      </div>
      <div className="headcard">
        <h1 className="head">Shop in style</h1>
        <h6>with this shop homepage template</h6>
      </div>

      <div className="card-container">
        {data.map((prod, idx) => (
          <Cards idx={idx} prod={prod} setCount={setCount} count={count} />
        ))}
      </div>
    </div>
  );
}

function Cards({ prod, idx, setCount, count }) {
  const [show, setShow] = useState(false);

  function addToCart() {
    setShow(!show);
    setCount(count + 1);
  }

  function removeFromCart() {
    setShow(!show);
    setCount(count - 1);
  }
  return (
    <Card key={idx} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.price} </Card.Text>
        <Card.Text>{prod.rating} </Card.Text>

        {!show ? (
          <Button variant="primary" onClick={addToCart}>
            Add cart
          </Button>
        ) : (
          ""
        )}

        {show ? (
          <Button variant="danger" onClick={removeFromCart}>
            remove cart
          </Button>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}

export default App;
