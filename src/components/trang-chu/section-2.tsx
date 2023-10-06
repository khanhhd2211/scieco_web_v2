import Image from 'next/image';
import NextGray from "@/images/svg/next-gray.svg";
import Service1 from "@/images/service-img/service-1.svg";

export default function Section2() {
	return (
    <div className="section section-2">
      <div className="section-2-1" data-aos="fade-up">
        <div><span>Dịch vụ</span> của chúng tôi</div>
        <div>Những dịch vụ mà chúng tôi đang cung cấp</div>
      </div>
      <div id="services" className="section-2-2" data-aos="fade-up">
        <div className="card">
          <div>
            <Image loading="lazy" src={Service1} alt='service 1' />
          </div>
          <div>Tư vấn, hỗ trợ thực hiện nghiên cứu khoa học</div>
          <div>
					Cùng đồng hành, hỗ trợ nghiên cứu khoa học bằng tư vấn, xây dựng và phát triển theo quy mô của đề tài.
          </div>
          <a className="btn click-style" href="/dich-vu/">
            <Image alt='next gray bth' src={NextGray} />
          </a>
        </div>
        <div className="card">
          <div>
            <Image loading="lazy" src={Service1} alt='service 1'/>
          </div>
          <div>Thành thạo phân tích dữ liệu cùng STATA</div>
          <div>
					Trang bị kỹ năng sử dụng STATA thông qua thực hành và tập trung vào các case study với dữ liệu thực tế.
          </div>
          <a className="btn click-style" href="/dich-vu/">
					<Image alt='next gray bth' src={NextGray} />
          </a>
        </div>
        <div className="card">
          <div>
            <Image loading="lazy" src={Service1} alt='service 1'/>
          </div>
          <div>Thành thạo phân tích dữ liệu ngôn ngữ R</div>
          <div>
					Trang bị kỹ năng sử dụng ngôn ngữ R thông qua thực hành và tập trung vào các case study với dữ liệu thực tế.
          </div>
          <a className="btn click-style" href="/dich-vu/">
						<Image alt='next gray bth' src={NextGray} />
          </a>
        </div>
      </div>
    </div>
	);
}
