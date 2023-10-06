import * as React from 'react';
import Image from 'next/image';
import Deal from '@/images/service-img/deal.svg'
import Cheating from '@/images/service-img/cheating.svg'

export interface IAppProps {
}

export default function App (props: IAppProps) {
	return (
    <div className="section-4 section">
      <div className="section-4-1" data-aos="fade-up">
        <div>
          Tại sao bạn nên sử dụng dịch vụ của 
          <span> S</span>ci<span>E</span>co?
        </div>
        <div>Lợi ích khi sử dụng dịch vụ</div>
      </div>
      <div className="section-4-2">
        <div className="card" data-aos="fade-up">
          <div><Image alt='image' loading="lazy" src={Deal}/></div>
          <div className="heading">
            Chuyên môn cao, có trách nhiệm, luôn chuyên nghiệp trong mọi tình
            huống
          </div>
          <div className="des">
            Chúng tôi đề cao tinh thần trách nhiệm, sự tôn trọng khách hàng và
            sự chuyên nghiệp trong các tình huống khác nhau.
          </div>
        </div>
        <div className="card phone-card" data-aos="fade-up">
          <Image alt='image' loading="lazy" src={Deal} />
          <div>
            <div className="heading">
              Chuyên môn cao, có trách nhiệm, luôn chuyên nghiệp trong mọi
              tình huống
            </div>
            <div className="des">
              Chúng tôi luôn đề cao tinh thần trách nhiệm, sự tôn trọng khách
              hàng và sự chuyên nghiệp trong các tình huống khác nhau
            </div>
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="150">
          <div className="heading">
            Hình thức on-job training/<br />hands-on learning
          </div>
          <div className="des">
            Nhiều hình thức đào tạo khác nhau, chúng tôi hy vọng chúng sẽ phù
            hợp với nhiều nhóm khách hàng có nhu cầu.
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <div className="heading">
            Đào tạo, tư vấn, triển khai tùy chỉnh theo nhu cầu của khách hàng
          </div>
          <div className="des">
            Nhằm phục vụ những nhu cầu đa dạng, chúng tôi có những dịch vụ đào
            tạo, tư vấn hoặc có thế triển khai, thay đổi và điều chỉnh theo
            nhu cầu.
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="250">
          <Image alt='image' loading="lazy" src={Cheating} />
          <div>
            <div className="heading">
              Nói KHÔNG với hành vi vi phạm liêm chính trong học thuật
            </div>
            <div className="des">
              Chúng tôi nói không với hành vi gian lận và sẽ từ chối hợp tác
              với những yêu cầu đang vi phạm đến liêm chính học thuật
            </div>
          </div>
        </div>
      </div>
    </div>
	);
}
