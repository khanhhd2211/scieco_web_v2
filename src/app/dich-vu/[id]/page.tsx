import Image from "next/image";
import { useRouter } from 'next/router'

import Ser1Image from "@/images/service-img/service-1.svg"
import Stata from "@/images/svg/stata.svg"
import R from "@/images/svg/R.svg"
import { IService } from "../page";

export default function ServiceDetail({ params }: { params: { id: string } }) {

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

	const service = dataService.find(ser => ser.id == Number(params.id))

  return (
    <div id="main">
    <div className="wrap-content">
      <div id="modal-name" className="name"><span>Dịch vụ 1:</span> Tư vấn, hỗ trợ nghiên cứu khoa học</div>
      <div className="content">
        <p>Dịch vụ tư vấn cao cấp giúp đảm bảo chất lượng công trình nghiên cứu </p>
        {service?.img && <Image alt='image' src={service.img} />}
        <p><b>Hoạt động</b></p>
        <ul>
          <li>Cung cấp và hướng dẫn khai thác tài liệu nghiên cứu</li>
          <li>Hỗ trợ, tư vấn xây dựng chính sách theo quy mô nghiên cứu</li>
          <li>Phản biện nội dung nghiên cứu và đề xuất chỉnh sửa trong thời gian ngắn nhất</li>
        </ul>
        <p><b>Hình thức tư vấn</b>: 1-1 hoặc 1 nhóm học viên</p>
        <p><b>Thời lượng tư vấn</b>: 2 tiếng/buổi</p>
        <p><b>Liên hệ ngay:</b></p>
        <ul>
          <p>Địa chỉ: 1102 HH1C Linh Đàm, P. Linh Đ., Hoàng Liệt, Hoàng Mai, Hà Nội</p>
          <p>Email: science.for.economics@gmail.com</p>
          <p>Hotline: 03.56.58.0500</p>
        </ul>
      </div>
    </div>
    </div>
  ) 
}
