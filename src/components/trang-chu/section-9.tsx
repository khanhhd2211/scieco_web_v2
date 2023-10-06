import Image from "next/image";

import Ava1 from '@/images/ava/ava1.webp'
import Ava2 from '@/images/ava/ava2.webp'
import Ava3 from '@/images/ava/ava3.webp'
import Ava4 from '@/images/ava/ava4.webp'
import Ava5 from '@/images/ava/ava5.webp'

import StarBlue from '@/images/svg/star-blue.svg'
import StarHalf from '@/images/svg/star-half.svg'
import StarGray from '@/images/svg/star-blue.svg'

export default function Section9 () {
	return (
    <div className="section-9 section">
      <div className="section-9-1" data-aos="fade-up">
        <div>Đánh giá</div>
        <div>Một số đánh giá của khách hàng về dịch vụ</div>
      </div>
      <div className="section-9-2">
        <div className="card" data-aos="fade-up">
          <Image alt='image' className="ava" width="150" height="150" loading="lazy" src={Ava5} />
          <div className="name">Thảo Vân</div>
          <div className="des">
            Khóa học rất hữu ích, lượng kiến thức của thầy cô rất thực tế và
            cố gắng lắng nghe feedback của học viên để điều chỉnh bài dạy phù
            hợp hơn.
          </div>
          <div className="star">
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <Image alt='image' className="ava" width="150" height="150" loading="lazy" src={Ava3} />
          <div className="name">Tuân Nguyễn</div>
          <div className="des">
            Highly recommend cho những bạn có background kinh tế/ không biết
            quá nhiều toán và thống kê nhưng vẫn dấn thân vào lĩnh vực data
            analytics!
          </div>
          <div className="star">
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="150">
          <Image alt='image' className="ava" width="150" height="150" loading="lazy" src={Ava1} />
          <div className="name">Tạ Quốc Việt</div>
          <div className="des">
            Rất phù hợp cho các bạn đang chuẩn bị thực hiện nguyên cứu và thu
            thập số liệu nhưng không có thời gian cũng như nhân lực để thực
            hiện.
          </div>
          <div className="star">
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarHalf} width="20" />
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <Image alt='image' className="ava" height="150" width="150" loading="lazy" src={Ava2} />
          <div className="name">Phạm Anh Tuấn</div>
          <div className="des">
            Đội ngũ rất chuyên nghiệp, tư vấn và giải đáp rất tận tình về
            những vấn đề gặp phải khi thực hiện nghiên cứu cho bài luận văn
            thạc sĩ của mình.
          </div>
          <div className="star">
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarHalf} width="20" />
          </div>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="250">
          <Image alt='image' className="ava" width="150" height="150" loading="lazy" src={Ava4} />
          <div className="name">Bảo Ngọc</div>
          <div className="des">
            Khóa học hữu ích, có nhiều điểm thú vị trong quá trình nghe giảng
            và làm bài tập, giảng viên tận tụy, giáo trình đầy đủ và hấp dẫn.
          </div>
          <div className="star">
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarBlue} width="20" />
            <Image alt='image' src={StarGray} width="20" />
          </div>
        </div>
      </div>
    </div>
	);
}
