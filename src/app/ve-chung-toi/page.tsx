import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi - Science for Economics",
};

import Image from "next/image";
import Deal from "@/images/service-img/deal.svg";
import '@/styles/ve_chung_toi.css'
import Modal from "@/components/modal";

export interface IUs {
  id: number, 
  name: string, 
  img: string,
  "pre-img": string,
  "bg-img": string,
  facebook?: string,
  gs?: string,
  linkedin?: string,
  rgate?: string,
  des: string[],
  detail: string
}

const dataUs:{specialist: IUs[], team: IUs[]} = {
  "specialist": [
    {
      "id": 1,
      "name": "PGS. TS. Hồ Đình Bảo",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hodinhbao1.jpg",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hodinhbao2.jpg",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hodinhbao3.jpg",
      "facebook": "https://www.facebook.com/bao.dinhho",
      "gs": "https://scholar.google.com.vn/citations?user=suqnmmQAAAAJ&hl=en",
      "linkedin": "",
      "des": [
        "PGS (2016), Tiến sĩ Kinh tế học tại Đại học Canberra (Úc)",
        "24+ năm kinh nghiệm giảng dạy tại Đại học Kinh tế Quốc Dân",
        "Trưởng khoa Kinh tế học (NEU)"
      ],
      "detail": "<p>1. Tiến sĩ Kinh tế học tại Đại học Canberra (&Uacute;c)</p> <p>2. Thạc sỹ Quản trị kinh doanh tại Đại học Ph&ograve;ng thương mại Th&aacute;i Lan (Th&aacute;i Lan)</p> <p>3. Trưởng khoa Kinh tế học (NEU) từ năm 2018 - nay (ng&agrave;nh: Kinh tế - chuy&ecirc;n s&acirc;u Kinh tế học, chương tr&igrave;nh Kinh tế học t&agrave;i ch&iacute;nh)</p> <p>4. Lĩnh vực nghi&ecirc;n cứu chuy&ecirc;n s&acirc;u của thầy l&agrave; Hiệu quả v&agrave; năng suất cấp doanh nghiệp, T&agrave;i ch&iacute;nh - Ng&acirc;n h&agrave;ng v&agrave; Đầu tư nước ngo&agrave;i.</p> <p>5. Cố vấn chuy&ecirc;n m&ocirc;n của SciEco</p> <p>👨&zwj;💻 Với chuy&ecirc;n m&ocirc;n cao về nghi&ecirc;n cứu c&ugrave;ng sự gắn b&oacute; v&agrave; t&acirc;m huyết d&agrave;nh cho việc học tập của sinh vi&ecirc;n n&oacute;i ri&ecirc;ng v&agrave; ph&aacute;t triển của kinh tế Việt Nam n&oacute;i chung, PGS. TS Hồ Đ&igrave;nh Bảo đ&atilde; d&agrave;nh nhiều thời gian v&agrave; c&ocirc;ng sức đối với hoạt động nghi&ecirc;n cứu khoa học cũng như tham gia c&aacute;c đề t&agrave;i cấp Nh&agrave; nước v&agrave; Tổ chức quốc tế từ năm 2013 - nay, ti&ecirc;u biểu như:</p> <p>📒 GVHD nh&oacute;m sinh vi&ecirc;n NEU đạt Giải Nh&igrave; NCKH với đề t&agrave;i &ldquo;Ph&aacute;t triển m&ocirc; h&igrave;nh thanh to&aacute;n bằng m&atilde; QR Code tại c&aacute;c trạm xăng tr&ecirc;n địa b&agrave;n th&agrave;nh phố H&agrave; Nội&rdquo; (2020)</p> <p>✏️ Hợp t&aacute;c nghi&ecirc;n cứu với Tổ chức Coffey: Innovative Anti-Corruption Research (2013 -2014)</p> <p>🤝 Cấp Nh&agrave; nước: Ho&agrave;n thiện cơ chế, ch&iacute;nh s&aacute;ch t&agrave;i ch&iacute;nh nhằm huy động, quản l&yacute; v&agrave; sử dụng hiệu quả c&aacute;c nguồn lực t&agrave;i ch&iacute;nh trong ứng ph&oacute; với t&aacute;c động của biến đổi kh&iacute; hậu tại Việt Nam (2014-2015), M&ocirc; h&igrave;nh tăng trưởng h&agrave;i h&ograve;a ở Việt Nam tiếp cận từ g&oacute;c độ doanh nghiệp (2015 - 2017), &hellip;</p> <p>🔥 Thầy c&ograve;n sở hữu nhiều b&agrave;i nghi&ecirc;n cứu tr&ecirc;n c&aacute;c tạp ch&iacute; danh gi&aacute; trong v&agrave; ngo&agrave;i nước như: Tạp ch&iacute; Quản l&yacute; Kinh tế , Tạp ch&iacute; Kinh tế &amp; Ph&aacute;t triển, Journal of Economics and Development, Journal of Crime, Law and Social change, &hellip;.</p>"
    },
    {
      "id": 2,
      "name": "TS. Đoàn Ngọc Thắng",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/doanngocthang1.jpg",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/doanngocthang2.jpg",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/doanngocthang3.jpg",
      "facebook": "https://www.facebook.com/ngocthang.doan",
      "gs": "https://scholar.google.com/citations?user=2ysjmpQAAAAJ&hl=en",
      "linkedin": "",
      "des": [
        "Tiến sĩ tại GRIPS (Tokyo)",
        "Trưởng bộ môn Thương mại quốc tế tại Học viện Ngân hàng",
        "Lĩnh vực nghiên cứu: Kinh tế quốc tế, Tài chính quốc tế, ..."
      ],
      "detail": "<p>Tiến sĩ tại Viện Quốc gia sau đại học về Nghi&ecirc;n cứu ch&iacute;nh s&aacute;ch (GRIPS) (Tokyo, Nhật Bản)</p> <p>Trưởng bộ m&ocirc;n Thương mại quốc tế, c&ocirc;ng t&aacute;c tại Học viện Ng&acirc;n h&agrave;ng</p> <p>Lĩnh vực nghi&ecirc;n cứu: Kinh tế quốc tế, T&agrave;i ch&iacute;nh quốc tế, Kinh doanh quốc tế<br />Th&agrave;nh vi&ecirc;n của t&iacute;ch cực Hội khoa học v&agrave; chuy&ecirc;n gia Việt Nam to&agrave;n cầu (AVSE Global)<br />Sở hữu nhiều nghi&ecirc;n cứu nổi bật xuất hiện tr&ecirc;n c&aacute;c tạp ch&iacute; quốc tế như International Review of Economics &amp; Finance, Scottish Journal of Political Economy, Bulletin of Economic Research,Economic Research-Ekonomska Istraživanja&hellip;</p>"
    },
    {
      "id": 3,
      "name": "TS. Hoàng Phương Dung",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hoangphuongdung1.jpg",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hoangphuongdung2.jpg",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hoangphuongdung3.jpg",
      "facebook": "https://www.facebook.com/hoang.dung.5036",
      "rgate": "https://www.researchgate.net/profile/Hoang-Dung-14",
      "des": [
        "Tiến sĩ Quản trị Kinh doanh Đại học Kinh tế Quốc dân",
        "Công tác tại Học viện Ngân hàng",
        "Lĩnh vực nghiên cứu: quản trị kinh doanh, kinh tế học, ..."
      ],
      "detail": "<p>Tiến sĩ Business Management tại trường Đại học Kinh tế quốc d&acirc;n</p> <p>Thạc sĩ Science in Marketing from University of Birmingham (Vương quốc Anh)</p> <p>Giảng vi&ecirc;n c&ocirc;ng t&aacute;c tại Học viện Ng&acirc;n h&agrave;ng</p> <p>Nghi&ecirc;n cứu vi&ecirc;n cao cấp, đồng thời l&agrave; chủ sở hữu nhiều nghi&ecirc;n cứu nổi bật trong lĩnh vực quản l&yacute; kinh doanh v&agrave; kinh tế đang xuất hiện tr&ecirc;n tạp ch&iacute; quốc tế danh gi&aacute; như International Journal of Bank Marketing, International Journal of Business and Society, Borsa Istanbul Review, &hellip;.</p>"
    },
    {
      "id": 4,
      "name": "TS. Lê Thanh Hà",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/lethanhha1.jpg",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/lethanhha2.jpg",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/lethanhha3.jpg",
      "facebook": "https://www.facebook.com/le.t.ha.549",
      "gs": "https://scholar.google.com/citations?user=ZEdj1P4AAAAJ&hl=en",
      "linkedin": "",
      "des": [
        "Tiến sĩ tại GRIPS (Tokyo)",
        "10+ năm kinh nghiệm giảng dạy tại Đại học Kinh tế quốc dân",
        "3 năm liên tiếp đạt giải “The Best Award Paper” tại CIEMB"
      ],
      "detail": "<p>1. Tiến sĩ Ph&acirc;n t&iacute;ch ch&iacute;nh s&aacute;ch, Viện nghi&ecirc;n cứu ch&iacute;nh s&aacute;ch c&ocirc;ng quốc gia (Nhật Bản)</p> <p>2. Thạc sĩ Ch&iacute;nh s&aacute;ch c&ocirc;ng, Viện nghi&ecirc;n cứu ch&iacute;nh s&aacute;ch c&ocirc;ng quốc gia (Nhật Bản)</p> <p>3. Chủ sở hữu gần 40 b&agrave;i b&aacute;o xuất bản tr&ecirc;n c&aacute;c tạp ch&iacute; quốc tế uy t&iacute;n thuộc hệ thống ISI/ Scopus</p> <p>4. Th&agrave;nh vi&ecirc;n của t&iacute;ch cực Hội khoa học v&agrave; chuy&ecirc;n gia Việt Nam to&agrave;n cầu (AVSE Global)</p> <p>5. Ba năm liền đạt giải &ldquo;The Best Award Paper&rdquo; trao bởi BTC Hội thảo quốc tế CIEMB</p> <p>6. Cố vấn chuy&ecirc;n m&ocirc;n tại SciEco</p> <p>🔥 Đặc biệt, với vị tr&iacute; l&agrave; một giảng vi&ecirc;n tại khoa Kinh tế học, thầy H&agrave; lu&ocirc;n d&agrave;nh hết sự nhiệt huyết v&agrave; vốn tri thức của m&igrave;nh để tiếp lửa, hướng dẫn v&agrave; d&igrave;u dắt sinh vi&ecirc;n, học vi&ecirc;n tham gia nghi&ecirc;n cứu.</p>"
    },
    {
      "id": 5,
      "name": "ThS. Phạm Xuân Nam",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/phamxuannam1.jpg",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/phamxuannam2.jpg",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/phamxuannam3.jpg",
      "facebook": "https://www.facebook.com/saiyogo",
      "linkedin": "",
      "des": [
        "Thạc sỹ Kinh tế phát triển từ Đại học Erasmus Rotterdam (Hà Lan)",
        "Lĩnh vực nghiên cứu: Kinh tế học; Trắc lượng kinh tế học; Quan hệ sản xuất kinh doanh"
      ],
      "detail": "<p>1. Thạc sỹ Kinh tế ph&aacute;t triển từ Đại học Erasmus Rotterdam (H&agrave; Lan)</p> <p>2. Lĩnh vực nghi&ecirc;n cứu: Kinh tế học; Trắc lượng kinh tế học; Quan hệ sản xuất kinh doanh</p> <p>3. Đồng t&aacute;c giả của nhiều b&agrave;i nghi&ecirc;n cứu xuất bản tr&ecirc;n c&aacute;c tạp ch&iacute; uy t&iacute;n Tạp ch&iacute; Kinh tế ph&aacute;t triển, Asian Journal of Economics, Business and Accounting, &hellip;.</p> <p>4. Cố vấn chuy&ecirc;n m&ocirc;n Nh&agrave; SciEco</p>"
    }
  ],
  "team": [
    {
      "id": 8,
      "name": "Hoàng Đăng Khánh",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hoangdangkhanh1.jpg",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hoangdangkhanh2.jpg",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hoangdangkhanh3.jpg",
      "facebook": "https://www.facebook.com/dangkhanh.hg/",
      "linkedin": "https://www.linkedin.com/in/kh%C3%A1nh-ho%C3%A0ng-%C4%91%C4%83ng-737036215/",
      "des": [
        "Phòng Xử lý & Phân tích dữ liệu ",
        "Cử nhân ngành Thống kê Kinh tế Đại học Kinh tế Quốc dân",
        "IBM SPSS, Stata, R, MySQL"
      ],
      "detail": "<p>1. Cử nhân ngành Thống kê Kinh tế, Đại học Kinh tế Quốc dân (NEU)</p> <p>2. Kinh nghiệm xử lý và phân tích dữ liệu từ công việc tự do và bán thời gian tại SciEco</p> <p>3. IBM SPSS, Stata, R, MySQL</p> <p>4. Luôn luôn tự học và tích lũy kiến thức, kinh nghiệm</p>"
    },
    {
      "id": 15,
      "name": "Nguyễn Hữu Kiên",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/nguyenhuukien1.png",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/nguyenhuukien2.png",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/nguyenhuukien3.png",
      "facebook": "https://www.facebook.com/nguyenhuukien2807/",
      "des": [
        "Phòng Xử lý & Phân tích dữ liệu ",
        "Cử nhân Kinh tế Quốc tế Đại học Kinh tế Quốc dân",
        "STATA"
      ],
      "detail": "<p>Hiện là cử nhân chuyên ngành Kinh tế Quốc tế, trường Đại học Kinh tế Quốc dân. Từng tham gia các hoạt động nghiên cứu tại trường và thành viên CLB Sinh viên nghiên cứu khoa học YES, hiện tại tôi tham gia các dự án giảng dạy tại SciEco. Tôi theo đuổi con đường trở thành DA, luôn học hỏi và trau dồi kiến thức.</p>"
    },
    {
      "id": 16,
      "name": "Nguyễn Mỹ Hiền",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/myhien1.png",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/myhien2.png",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/nguyenhuukien3.png",
      "facebook": "https://www.facebook.com/profile.php?id=100023312584898",
      "rgate": "https://www.researchgate.net/profile/My-Hien-Nguyen-2",
      "des": [
        "Phòng Xử lý & Phân tích dữ liệu ",
        "Cử nhân Kinh tế học Đại học Kinh tế Quốc dân",
        "IBM SPSS, Stata, Power BI, Matlab"
      ],
      "detail": "<p>Cử nhân ngành Kinh tế, trường Đại học Kinh tế Quốc dân (NEU)</p><p>Có kinh nghiệm xử lý và phân tích dữ liệu</p><p>IBM SPSS, Stata, Power BI, Matlab</p><p>Luôn không ngừng học hỏi, tích lũy kiến thức, kinh nghiệm và phát triển bản thân về mọi mặt.</p><p>Theo đuổi con đường trở thành một DA</p>"
    },
    {
      "id": 17,
      "name": "Nguyễn Hà My",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hamy1.png",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/hamy2.png",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/nguyenhuukien3.png",
      "facebook": "https://www.facebook.com/nguyenmy.ha.265/",
      "des": [
        "Phòng Xử lý & Phân tích dữ liệu ",
        "Cử nhân Kinh tế và Phát triển Quốc tế Đại học Ngoại Thương",
        "STATA, R"
      ],
      "detail": "<p>Nguyễn Hà My - cử nhân chuyên ngành Kinh tế và Phát triển Quốc tế, Trường Đại học Ngoại Thương. Từng tham gia các hoạt động nghiên cứu tại Trường và Viện nghiên cứu độc lập, hiện tại tôi tham gia các hoạt động nghiên cứu và giảng dạy tại SciEco. Tôi theo đuổi con đường trở thành nhà nghiên cứu học thuật, luôn học hỏi và trau dồi kiến thức.</p>Link CV: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://drive.google.com/file/d/1pZ1AbCAJVwpix_RToiV74kRcJkrlxOYu/view?usp=sharing\">Google Drive</a>"
    },
    {
      "id": 18,
      "name": "Lê Quốc Tuấn",
      "img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/lequoctuan1.png",
      "pre-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/lequoctuan2.png",
      "bg-img": "https://scieco.s3.ap-southeast-1.amazonaws.com/us/nguyenhuukien3.png",
      "facebook": "https://www.facebook.com/cautuat.shynn/",
      "linkedin": "https://www.linkedin.com/in/qu%E1%BB%91c-tu%E1%BA%A5n-l%C3%AA-533566222/",
      "des": [
        "Phòng Marketing",
        "Cử nhân Kinh tế học Đại học Kinh tế Quốc dân",
        "Stata, R, Power BI"
      ],
      "detail": "<p>Lê Quốc Tuấn - Cử nhân chuyên ngành Kinh tế học, Trường Đại học Kinh tế Quốc dân. Hiện tôi đang lead marketing và chăm sóc khách hàng tại  SciEco. Tôi không ngừng học hỏi và trau dồi bản thân trong các lĩnh vực liên quan đến phân tích dữ liệu.</p>"
    }
  ]
}

function UsCard({us}: { us: IUs }) {
  return(
    <div data-aos="fade-up" data-aos-delay="${index * 5 + 100}" id={`${us.id}`} className="card">
      <img loading="lazy" src={`${us['pre-img']}`} width="350" height="270" />
      <div className="name">{us.name}</div>
      <ul className="des">
        {us.des.map((des,i) => <li key={i}>{des}</li>)}
      </ul>
    </div>
  )
}

export default function VeChungToi() {
  return (
    <div id="main">
      <div className="full_page">
        <div data-aos="fade-up" className="us-section-1">
          <div className="heading">
            Tìm hiểu về <span>đội ngũ SciEco</span>
          </div>
          <div className="des">
            Hội đồng cố vấn có chuyên môn cùng với đội ngũ trẻ nhiệt huyết, năng
            động và trách nhiệm là nền tảng để chúng tôi phục vụ khách hàng
          </div>
        </div>
      </div>
      <div className="us-section-2 us-section">
        <div data-aos="fade-up">
          <div className="heading">Giá trị chúng tôi hướng tới</div>
          <div className="des">
            Chúng tôi mong muốn có thể định hướng, đào tạo và tư vấn, để giúp
            khách hàng nâng cao và trang bị được kiến thức, kỹ năng nghiên cứu
            khoa học định hướng xuất bản quốc tế
          </div>
        </div>
        <Image alt="deal" data-aos-delay="150" data-aos="fade-up" src={Deal} />
      </div>
      <div className="us-section-3 us-section">
        <div className="us-section-3-1" data-aos="fade-up">
          <div className="heading">Hội đồng cố vấn chuyên môn</div>
          <div className="des">
            Những cố vấn chuyên môn đang làm việc tại SciEco
          </div>
        </div>
        <div id="specialist" className="us-section-3-2">
          {dataUs.specialist.map(person => <UsCard key={person.id} us={person} />)}
        </div>
      </div>
      <div data-aos="fade-up" className="us-section-3 us-section">
        <div className="us-section-3-1">
          <div className="heading">Đội ngũ</div>
          <div className="des">Những cá nhân tiêu biểu đang hoạt động</div>
        </div>
        <div id="team" className="us-section-3-2">
          {dataUs.team.map(person => <UsCard key={person.id} us={person} />)}
        </div>
      </div>
      <Modal />
      <div id="footer" className="footer"></div>
    </div>
  );
}
