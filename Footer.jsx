import "./Css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/my-orders">My Order</a>
        <a href="/cart">Cart</a>
        <a href="/account">My Account</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Gram Hat. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
