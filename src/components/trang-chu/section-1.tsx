import Image from 'next/image'
import ImagePhone from '@/images/trang-chu/1-section-11.webp'
import ImageDeskstop from '@/images/trang-chu/1-section-1.webp'
import ImagePhone2 from '@/images/trang-chu/1-section-1.svg'

export default function Section1 () {
	return (
    <div className="section section-1">
      <div data-aos="fade-up" className="section-1-1">
        <div>
          <span>Master</span> of Research in Economics and Business Management
        </div>
        <div>
          SciEco định hướng đào tạo và tư vấn nhằm hỗ trợ khách hàng trang bị
          và nâng cao kiến thức, kỹ năng nghiên cứu khoa học trong linh vực
          kinh tế và kinh doanh.
        </div>
      </div>
      <Image className="main-img img-phone" alt="main image" data-aos="fade-up" width={500} height={350} src={ImagePhone} />
      <div className="section-1-2" data-aos="fade-up">
        <Image className="img-desktop" alt="main image" src={ImageDeskstop} width={500} height={350} />
        <Image className="img-phone" alt="main image"  src={ImagePhone2} height={950} width={500} />
      </div>
    </div>
	);
}
