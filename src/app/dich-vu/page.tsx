import { Metadata } from "next";
import "@/styles/dichvu.css";
import "@/styles/ve_chung_toi.css";
import "@/styles/trang-chu.css";

export const metadata: Metadata = {
  title: "Dịch vụ - Science for Economics",
};

import Image from "next/image";
import NextBlue from "@/images/svg/next-blue.svg";
import Ser1Image from "@/images/service-img/service-1.svg"
import Stata from "@/images/svg/stata.svg"
import R from "@/images/svg/R.svg"
import Link from "next/link";

export interface IService {
  id: number;
  name: string;
  img: string;
  link: string;
  des: string;
  shortDes: string;
}

const dataService: IService[] = [
  {
    id: 11,
    name: "Tư vấn, hỗ trợ thực hiện nghiên cứu khoa học",
    // img: "@/images/service-img/service-1.svg",
    img: Ser1Image,
    link: "/dich-vu/dich-vu-1.html",
    des: "Cùng đồng hành, hỗ trợ nghiên cứu khoa học bằng tư vấn, xây dựng và phát triển theo quy mô của đề tài, tư vấn xuất bản, tư vấn sử dụng phần mềm định lượng.",
    shortDes:
      "Cùng đồng hành, hỗ trợ nghiên cứu khoa học bằng tư vấn, xây dựng và phát triển theo quy mô của đề tài.",
  },
  {
    id: 13,
    name: "Thành thạo phân tích dữ liệu cùng STATA",
    img: Stata,
    link: "/dich-vu/dich-vu-2.html",
    des: "Trang bị kỹ năng sử dụng STATA thông qua thực hành và tập trung vào các case study với dữ liệu thực tế.",
    shortDes:
      "Trang bị kỹ năng sử dụng STATA thông qua thực hành và tập trung vào các case study với dữ liệu thực tế.",
  },
  {
    id: 14,
    name: "Thành thạo phân tích dữ liệu ngôn ngữ R",
    img: R,
    // img: "@/service/svg/R.svg,
    link: "/dich-vu/dich-vu-3.html",
    des: "Trang bị kỹ năng sử dụng ngôn ngữ R thông qua thực hành và tập trung vào các case study với dữ liệu thực tế.",
    shortDes:
      "Trang bị kỹ năng sử dụng ngôn ngữ R thông qua thực hành và tập trung vào các case study với dữ liệu thực tế.",
  },
];

export default function DichVu() {

  function BoxService(props: { index: number; service: IService }) {
    const { service, index } = props;
    
    return (
      <div className="box">
        <div>
          <div className="heading">
            <span>Dịch vụ {index + 1}</span>: {service.name}
          </div>
          <div className="des">{service.des}</div>
          <Link href={`/dich-vu/${service.id}`} className="btn no-style-hlink">
            <div>Tìm hiểu thêm</div>
            <Image alt="next-blue" width={22} height={22} src={NextBlue} />
          </Link>
        </div>
        <Image alt='service image' width="400" height="400" loading="lazy" src={service.img} />
      </div>
    );
  }

  return (
    <div id="main">
      <div className="full_page">
        <div
          className="us-section-1 ser-section-1 ser-section"
          data-aos="fade-up"
        >
          <div className="heading heading-desktop">
            <span>Dịch vụ</span> của chúng tôi
          </div>
          <div className="heading heading-phone">
            <span>Dịch vụ</span> chúng tôi cung cấp
          </div>
          <div className="des">
            Chúng tôi cung cấp đầy đủ các dịch vụ để phục vụ cho hoạt động đào
            tạo, nghiên cứu, hỗ trợ, tư vấn cho khách hàng và doanh nghiệp.
          </div>
        </div>
      </div>
      <div id="services" className="ser-section ser-section-2">
        {dataService.map((ser, i) => (
          <BoxService index={i} key={ser.id} service={ser} />
        ))}
      </div>
      {/* <div id="dark-bg-modal" className="dark-bg-modal"></div> */}
      {/* <div id="wrap-modal" className="wrap-modal">
        <div id="modal" className="modal">
          <div id="close-btn" className="close-btn">
            <Image alt='close-btn' height="20" width="20" src="/public/svg/close-btn-white.svg" />
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
