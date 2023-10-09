import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi - Science for Economics",
};

import Image from "next/image";
import Deal from "@/images/service-img/deal.svg";
import '@/styles/ve_chung_toi.css'

export default function DichVu() {
  return (
    <div id="main">
      <div className="full_page">
        <div data-aos="fade-up" className="us-section-1">
          <div className="heading">
            Tìm hiểu về <span>đội ngũ SciEco</span>
          </div>
          <div className="des">
            Hội đồng cố vấn có chuyên môn cùng với đội ngũ trẻ nhiệt huyết, năng
            động và trách nhiệm là nền tảng để chúng tôi phục vụ khách hàng
          </div>
        </div>
      </div>
      <div className="us-section-2 us-section">
        <div data-aos="fade-up">
          <div className="heading">Giá trị chúng tôi hướng tới</div>
          <div className="des">
            Chúng tôi mong muốn có thể định hướng, đào tạo và tư vấn, để giúp
            khách hàng nâng cao và trang bị được kiến thức, kỹ năng nghiên cứu
            khoa học định hướng xuất bản quốc tế
          </div>
        </div>
        <Image alt="deal" data-aos-delay="150" data-aos="fade-up" src={Deal} />
      </div>
      <div className="us-section-3 us-section">
        <div className="us-section-3-1" data-aos="fade-up">
          <div className="heading">Hội đồng cố vấn chuyên môn</div>
          <div className="des">
            Những cố vấn chuyên môn đang làm việc tại SciEco
          </div>
        </div>
        <div id="specialist" className="us-section-3-2"></div>
      </div>
      <div data-aos="fade-up" className="us-section-3 us-section">
        <div className="us-section-3-1">
          <div className="heading">Đội ngũ</div>
          <div className="des">Những cá nhân tiêu biểu đang hoạt động</div>
        </div>
        <div id="team" className="us-section-3-2"></div>
      </div>
      {/* <div id="dark-bg-modal" className="dark-bg-modal"></div> */}
      {/* <div id="wrap-modal" className="wrap-modal">
        <div id="modal" className="modal">
          <div id="close-btn" className="close-btn">
            <img height="20" width="20" src="/public/svg/close-btn-white.svg" />
          </div>
          <div id="wrap-ava" className="wrap-img">
            <img id="modal-ava" src="" width="200" height="200" />
          </div>
          <div className="wrap-btn">
            <a
              href="#"
              id="modal-facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              Facebook
            </a>
            <a
              href="#"
              id="modal-gs"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              G-Scholar
            </a>
            <a
              href="#"
              id="modal-rgate"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              R-Gate
            </a>
            <a
              href="#"
              id="modal-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink"
            >
              Linked
              <span>in</span>
            </a>
          </div>
          <div className="wrap-content">
            <div id="modal-name" className="name"></div>
            <div id="modal-content" className="content"></div>
          </div>
        </div>
      </div> */}
      <div id="footer" className="footer"></div>
    </div>
  );
}
