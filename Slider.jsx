import Carousel from "react-bootstrap/Carousel";
import img1 from "../src/image/img1.jpg";
import img2 from "../src/image/ban3.jpg";
import "./Css/slider.css";

const Slider = () => {
  return (
    <Carousel fade interval={3000}>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={img1}
          alt="Fresh Vegetables"
        />
        <Carousel.Caption className="slider-text">
          <h3>Fresh & Organic Vegetables</h3>
          <p>Direct from farmers to your home</p>
          <button className="order-btn">Order Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={img2}
          alt="Pure Grocery"
        />
        <Carousel.Caption className="slider-text">
          <h3>Pure & Healthy Grocery</h3>
          <p>Best quality at affordable price</p>
          <button className="order-btn">Order Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
