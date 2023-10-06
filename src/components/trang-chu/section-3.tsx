import Image from "next/image";
import Book from '@/images/svg/book.svg'
import People from '@/images/svg/people.svg'
import Sending from '@/images/svg/sending.svg'

export default function Section3 () {
	return (
    <div className="section-3 section">
      <div className="section-3-1" data-aos="fade-up">
        <div>Chuyên môn</div>
        <div>Chuyên môn của tập thể SciEco chúng tôi</div>
      </div>
      <div className="section-3-2" data-aos="fade-up">
        <div className="card">
          <div><Image alt="image section" loading="lazy" src={Book} /></div>
          <div>Kiến thức chuyên môn</div>
          <div>
            Chuyên môn cao trên các lĩnh vực khác nhau như Kinh tế học, Quản
            trị kinh doanh và Marketing
          </div>
          <a className="no-style-hlink click-style" href="/ve-chung-toi/">Tìm hiểu thêm</a>
        </div>
        <div className="card">
          <div><Image alt="image section" loading="lazy" src={People} /></div>
          <div>Đội ngũ giàu kinh nghiệm</div>
          <div>
            Đội ngũ cố vấn giàu kinh nghiệm kèm theo đó là đội ngũ cộng tác
            viên rất nhiệt huyết
          </div>
          <a className="no-style-hlink click-style" href="/ve-chung-toi/">Tìm hiểu thêm</a>
        </div>
        <div className="card">
          <div><Image alt="image section" loading="lazy" src={Sending} /></div>
          <div>Dịch vụ đa dạng</div>
          <div>
            Chúng tôi mang đến nhiều loại dịch vụ khác nhau để giải quyết
            những vấn đề của các bạn
          </div>
          <a className="no-style-hlink click-style" href="/ve-chung-toi/">Tìm hiểu thêm</a>
        </div>
      </div>
    </div>
	);
}
