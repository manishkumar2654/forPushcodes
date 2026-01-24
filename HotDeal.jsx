import "./Css/hotdeal.css";
import hot1 from "../src/image/ata.jpeg";
import hot2 from "../src/image/bajra.jpeg";
import hot3 from "../src/image/apple.jpg";
import hot4 from "../src/image/jawar.jpeg";
import hot5 from "../src/image/makka.jpeg";
import hot6 from "../src/image/malti.jpeg";

const HotDeal = () => {
  const deals = [
    {
      id: 1,
      name: "Ata",
      price: 40,
      oldPrice: 60,
      img: hot1,
      off: "33% OFF",
    },
    {
      id: 2,
      name: "Bajra",
      price: 35,
      oldPrice: 50,
      img: hot2,
      off: "30% OFF",
    },
    {
      id: 3,
      name: "Apple",
      price: 25,
      oldPrice: 40,
      img: hot3,
      off: "38% OFF",
    },
    {
      id: 4,
      name: "bajra",
      price: 40,
      oldPrice: 60,
      img: hot4,
      off: "33% OFF",
    },
    {
      id: 5,
      name: "makka",
      price: 35,
      oldPrice: 50,
      img: hot5,
      off: "30% OFF",
    },
    {
      id: 6,
      name: "multi",
      price: 25,
      oldPrice: 40,
      img: hot6,
      off: "38% OFF",
    },
    {
      id: 7,
      name: "Ata",
      price: 40,
      oldPrice: 60,
      img: hot1,
      off: "33% OFF",
    },
    {
      id: 8,
      name: "Bajra",
      price: 35,
      oldPrice: 50,
      img: hot2,
      off: "30% OFF",
    },
    {
      id: 9,
      name: "Apple",
      price: 25,
      oldPrice: 40,
      img: hot3,
      off: "38% OFF",
    },
    {
      id: 11,
      name: "Ata",
      price: 40,
      oldPrice: 60,
      img: hot1,
      off: "33% OFF",
    },
    {
      id: 12,
      name: "Bajra",
      price: 35,
      oldPrice: 50,
      img: hot2,
      off: "30% OFF",
    },
    {
      id: 13,
      name: "Apple",
      price: 25,
      oldPrice: 40,
      img: hot3,
      off: "38% OFF",
    },
    {
      id: 14,
      name: "Ata",
      price: 40,
      oldPrice: 60,
      img: hot1,
      off: "33% OFF",
    },
    {
      id: 15,
      name: "Bajra",
      price: 35,
      oldPrice: 50,
      img: hot2,
      off: "30% OFF",
    },
    {
      id: 16,
      name: "Apple",
      price: 25,
      oldPrice: 40,
      img: hot3,
      off: "38% OFF",
    },
    {
      id: 17,
      name: "Ata",
      price: 40,
      oldPrice: 60,
      img: hot1,
      off: "33% OFF",
    },
    {
      id: 18,
      name: "Bajra",
      price: 35,
      oldPrice: 50,
      img: hot2,
      off: "30% OFF",
    },
    {
      id: 19,
      name: "Apple",
      price: 25,
      oldPrice: 40,
      img: hot3,
      off: "38% OFF",
    },
  ];

  return (
    <div className="hotdeal-section">
      <h2 className="hotdeal-title">🔥 Today’s Hot Deal</h2>

      <div className="hotdeal-grid">
        {deals.map((item) => (
          <div className="hotdeal-card" key={item.id}>
            <span className="offer-badge">{item.off}</span>

            <img src={item.img} alt={item.name} />

            <h4>{item.name}</h4>

            <div className="price-box">
              <span className="new-price">₹{item.price}</span>
              <span className="old-price">₹{item.oldPrice}</span>
            </div>

            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeal;
