import React from 'react';
import './introduce.scss';
import { Link } from 'react-router-dom';
import dataWeb from '../../data';

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
                là một dự án thiện nguyện quy mô nhỏ, với mục đích là đến trung tâm nuôi dưỡng cãi thiện bữa ăn tăng
                cường dinh dưỡng giúp các em có thể phát triển một cách đầy đủ hơn.
              </p>
              <p>
                Nhóm Anh em mình dành tâm huyết tạo ra 1 sân chơi cho các em giúp các em có thêm tinh thần lạc quan vui
                vẻ trong cuộc sống. Nhằm thể hiện tinh thần “tương thân thân, tương ái”; “lá lành đùm lá rách, lá rách
                ít đùm lá rách nhiều”, phát huy truyền thống quý báu của người Việt Nam chúng ta. Nhóm Anh em mình mong
                rằng những việc làm của chúng em sẽ góp phần lan tỏa cho những điều tích cực, tốt đẹp trong xã hội, lan
                tỏa tấm lòng tốt cho thế hệ trẻ hôm nay. Để cùng chung tay sẻ chia, động viên, tiếp thêm sức mạnh cho
                các em nhỏ kém may mắn, những người có hoàn cảnh khó khăn trong cuộc sống, để họ chiến thắng với hoàn
                cảnh, số phận.
              </p>
            </div>
          </div>
          <div className="contact-content custom-content">
            <span className="col-2 span-title">Ủng hộ tụi mình</span>
            <div className="content col-10 col-12 description">
              <p>
                <Link to="san-pham-gay-quy" className="red-color">
                  Mua các sản phẩm gây quỷ:
                </Link>
                <span> Lãi xuất của các sản phẩm gây quỷ cam đoan 100% sẽ được hổ trợ cho các bé</span>
              </p>
              <p>
                Nếu bạn không có nhu cầu mua sản phẩm của chúng tôi hoặc nó không phù hợp với bạn bạn có thể ủng hộ
                chúng tôi thông qua
              </p>
              <div className="qr">
                <img src={dataWeb.Qr.momo} alt="" width={300} />
                <img src={dataWeb.Qr.bank} alt="" width={300} className="bank" />
              </div>
            </div>
          </div>
          <div className="contact-content custom-content">
            <span className="col-2 span-title">Thông Tin Liên Hệ</span>
            <div className="content col-10 col-12 description">
              <p>
                Hotline: <span className="red-color">09841 58677</span>
              </p>
              <p>
                Giải quyết khiếu nại: <span className="red-color">0908 66 88 27</span>
              </p>
              <p>
                Email: <span>350fpastryhouse@gmail.com</span>
              </p>
              <p>
                Nhóm bán các sản phẩm thiện nguyện ở: <span>Tất cả các ngày trong tuần</span>
              </p>
            </div>
          </div>
          <div className=" about-us__site-map custom-content">
            <span className="span-title col-2">Nơi chúng mình hỗ trợ lần này</span>
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
