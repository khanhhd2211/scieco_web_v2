import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kết nối - Science for Economics",
};

import Image from "next/image";
import "@/styles/ketnoi.css";
import Facebook from "@/images/svg/facebook.svg";
import Youtube from "@/images/svg/youtube.svg";

export default function DichVu() {
  return (
    <div id="main">
      <div className="con-section" data-aos="fade-up">
        <div>
          <div className="heading-1">
            <span>Hãy đồng hành</span> cùng chúng tôi!
          </div>
          <div className="logo">
            <span>S</span>ci<span>E</span>co
          </div>
          <div className="logo-des">Science for Economics</div>
          <div className="des">
            Định hướng đào tạo và tư vấn giúp khách hàng trang bị và nâng cao
            kiến thức, kỹ năng nghiên cứu khoa học định hướng xuất bản quốc tế
          </div>
        </div>
        <div>
          <div className="contact">
            <div className="heading-2">Contact</div>
            <div className="des">
              <b>Địa chỉ:</b> 92 Bờ Sông Sét, Thịnh Liệt, Hoàng Mai, Hà Nội (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/ZcsyrqstLNjtD7YW6"
              >
                Google Maps
              </a>
              )
            </div>
            <div className="des">
              <b>Email:</b>{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:science.for.economics@gmail.com"
              >
                science.for.economics@gmail.com
              </a>
            </div>
            <div className="des">
              <b>Hotline:</b>
              <ol>
                <li>0867.689.262 (Mr. Tuấn)</li>
                <li>03.57.94.7680 (Mrs. Hà)</li>
              </ol>
            </div>
          </div>
          <div className="social-media">
            <div className="heading-2">Social media</div>
            <a
              href="https://www.facebook.com/Science.for.Economics"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink social"
            >
              <Image alt="icon" src={Facebook} />
              <div className="social-des">Science for Economics</div>
            </a>
            <a
              href="https://www.youtube.com/user/Thanhha9289"
              target="_blank"
              rel="noopener noreferrer"
              className="no-style-hlink social"
            >
              <Image alt="icon" src={Youtube} />
              <div className="social-des">Science for Economics</div>
            </a>
          </div>
        </div>
      </div>
      {/* <div id="footer" className="footer"></div> */}
    </div>
  );
}
