import Image from 'next/image';
import Facebook from '@/images/svg/facebook.svg';
import Youtube from '@/images/svg/youtube.svg'
import '@/styles/footer.css'
import Link from 'next/link';

export default function Footer() {
	return (
		<div className="footer">
		   <div className="footer-1">
      <div className="footer-1-1 footer-item">
        <div className="logo"><span>S</span>ci<span>E</span>co</div>
        <div className="logo-des">Science for Economics</div>
        <div className="des">Định hướng đào tạo và tư vấn giúp khách hàng trang bị và nâng cao kiến thức, kỹ năng nghiên
          cứu khoa học
          định hướng xuất bản quốc tế</div>
      </div>
      <div className="footer-1-2 footer-item">
        <div className="heading">Contact</div>
        <div className="des"><b>Địa chỉ:</b> 92 Bờ Sông Sét, Thịnh Liệt, Hoàng Mai, Hà Nội (<a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/ZcsyrqstLNjtD7YW6">Google Maps</a>)</div>
        <div className="des"><b>Email:</b> <a target="_blank" rel="noopener noreferrer" href="mailto:science.for.economics@gmail.com">science.for.economics@gmail.com</a></div>
        <div className="des"><b>Hotline:</b> <ol><li>0867.689.262 (Mr. Tuấn)</li><li>03.57.94.7680 (Mrs. Hà)</li></ol></div>
      </div>
      <div className="social-media footer-item">
        <div className="heading">Social media</div>
        <a href="https://www.facebook.com/Science.for.Economics" target="_blank" rel="noopener noreferrer" className="no-style-hlink social">
          <Image alt='image' src={Facebook} />
          <div className="social-des">Science for Economics</div>
        </a>
        <a href="https://www.youtube.com/user/Thanhha9289" target="_blank" rel="noopener noreferrer" className="no-style-hlink social">
          <Image alt='image' src={Youtube} />
          <div className="social-des">Science for Economics</div>
        </a>
      </div>
    </div>
    <div className="nav-bar-2">
      <Link id="footer-nav-1" className="no-style-hlink" href="/">Trang chủ</Link>
      <Link id="footer-nav-2" className="no-style-hlink" href="/dich-vu/">Dịch vụ</Link>
      <Link id="footer-nav-5"  className="no-style-hlink" href="https://bai-viet.scienceforeconomics.com/">Bài viết</Link>
      <Link id="footer-nav-3" className="no-style-hlink" href="/ve-chung-toi/">Về chúng tôi</Link>
      <Link id="footer-nav-4"  className="no-style-hlink" href="/ket-noi/">Kết nối</Link>
    </div>	
		</div>
	);
}
