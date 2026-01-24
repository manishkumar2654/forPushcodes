import "./Css/categories.css";
import veg from "../src/image/veggies.png";
import fruits from "../src/image/fruit.png";
import grocery from "../src/image/exotic.png";
import dairy from "../src/image/dairy.png";

const Categories = () => {
  const categoryData = [
    { id: 1, name: "Vegetables", img: veg },
    { id: 2, name: "Fruits", img: fruits },
    { id: 3, name: "Grocery", img: grocery },
    { id: 4, name: "Dairy Products", img: dairy },
  ];

  return (
    <div className="category-section">
      <h2 className="category-title">Product Categories</h2>

      <div className="category-grid">
        {categoryData.map((cat) => (
          <div className="category-card" key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <div className="category-overlay">
              <h4>{cat.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
