import React from 'react';
import 'boxicons';
import './footer.scss';
const Footer = () => {
  return (
    <footer>
      <div className="footer__inner">
        <ul className="footer__inner__help">
          <li>Lioes</li>
          <li>Suất Cơm Thêm Thịt</li>
          <li>© 2023 by Nguyễn Tuấn Anh</li>
        </ul>
        <a className="fanpage" href="https://www.facebook.com/profile.php?id=100093114694854" target="_blank">
          <i className="bx bxl-facebook-circle"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
