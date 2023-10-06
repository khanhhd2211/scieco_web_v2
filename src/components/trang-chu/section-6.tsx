import Image from 'next/image';
import Partner from '@/images/service-img/partner.webp'
import NextBlue from '@/images/svg/next-blue.svg'

export default function Section6 () {
	return (
    <div className="section-6 section">
      <Image className="section-6-2" data-aos="fade-up" alt="partner" width="850" loading="lazy" src={Partner} />
      <div className="section-6-1" data-aos="fade-up" data-aos-delay="200">
        <div className="heading">Về chúng tôi</div>
        <div className="des">
          Đội ngũ cố vấn giàu kinh nghiệm thực chiến, là senior nhiều năm kinh
          nghiệm trong các lĩnh vực Kinh tế học, Quản trị kinh doanh,
          Marketing,… Là thành viên của Hội khoa học và chuyên gia Việt Nam
          toàn cầu (AVSE Global), chủ sở hữu của nhiều xuất bản trên các tạp
          chí quốc tế danh giá thuộc hệ thống ISI/Scopus.
        </div>
        <a className="btn no-style-hlink" href="/ve-chung-toi/">
          <div>Tìm hiểu thêm</div>
          <Image alt='next' width="22" src={NextBlue} />
        </a>
      </div>
    </div>
	);
}
