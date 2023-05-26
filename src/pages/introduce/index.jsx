import React from 'react';
import './introduce.scss';

const Introduce = () => {
  return (
    <div className="wapper mt-5">
      <div className="about-us">
        <div className="about-us__title">
          <p className="text-center">Về Chúng Tôi</p>
        </div>
        <div className="about-us__banner">
          <div className="img__banner"></div>
        </div>
        <div className="about-us__content">
          <div className="the-name custom-content">
            <span className="col-2 span-title">"Xuất cơm thêm thịt"</span>
            <div className="description col-10 col-12">
              <p>
                Ở tiệm bánh The 350F, mỗi chiếc bánh là một câu chuyện riêng với hơi thở và tinh thần chẳng thể lẫn vào
                đâu được
              </p>
              <p>
                Chúng mình – những người thợ làm bánh thủ công luôn cố gắng tôn trọng tính nguyên bản, tự nhiên và chân
                thật nhất của từng nguyên liệu. Để dù có những bất toàn trong mỗi thứ riêng rẽ nhưng sau cùng vẫn tạo
                nên một ổ bánh hài hòa và ngon nhất.
              </p>
              <p>
                Vậy nên, bất cứ khi nào bạn cần những hương vị mộc mạc, tinh tế nhưng chẳng kém phần hấp dẫn, hãy đến
                với chúng mình. Luôn có rất nhiều những điều đặc biệt đợi bạn khám phá đó nhé!
              </p>
            </div>
          </div>
          <div className="contact-content custom-content">
            <span className="col-2 span-title">Thông Tin Liên Hệ</span>
            <div className="content col-10 col-12 description">
              <p>
                Hotline: <span className="red-color">0908 788787</span>
              </p>
              <p>
                Giải quyết khiếu nại: <span className="red-color">0908 66 88 27</span>
              </p>
              <p>
                Email: <span>350fpastryhouse@gmail.com</span>
              </p>
              <p>Địa chỉ: 36 Nguyễn Trãi, Phường Bến Thành, Quận 1, TPHCM</p>
              <p>
                Ngày làm việc: <span>Tất cả các ngày trong tuần</span>
              </p>
              <p>
                Giờ làm việc: <span>07h00 - 20h00</span>
              </p>
            </div>
          </div>
          <div className=" about-us__site-map custom-content">
            <span className="span-title col-2">Bản đồ</span>
            <div className="site-map col-10 col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.7128440086868!2d106.68513647516416!3d10.822683697613424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e5354446af%3A0xa63040ac539291e3!2zVHJ1bmcgVMOibSBOdcO0aSBExrDhu6FuZyBC4bqjbyBUcuG7oyBUcuG6uyBFbSBHw7IgVuG6pXA!5e0!3m2!1svi!2s!4v1685085390688!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
