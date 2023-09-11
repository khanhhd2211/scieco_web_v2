'use client'
import styles from '@/styles/navbar.module.css'
import Link from 'next/link';
import debounce from '@/utils/debounce';
import { useState } from 'react';

export default function NavBar () {
	const [stick, setStick] = useState<boolean>(false);

	function addStickClass(){
		if(window.scrollY > 25){
			//user is at the top of the page; no need to show the back to top button
			setStick(true)
		} else {
			setStick(false)
		}
	}

	const debouncedAddStickClass = debounce(addStickClass, 100)
	window.addEventListener("scroll", debouncedAddStickClass);

	return (
		<div className={`${styles.navbar} ${stick ? styles.stick : ''}`}>
			<div className={styles.logo}><Link className="no-style-hlink" href="/"><span>S</span>ci<span>E</span>co</Link></div>
			<div className={styles.wrapBtn}>
				<div><Link id="nav-btn-1" className="no-style-hlink" href="/">Trang chủ</Link></div>
				<div><a id="nav-btn-2" className="no-style-hlink" href="/dich-vu/">Dịch vụ</a></div>
				<div><a id="nav-btn-5" className="no-style-hlink" href="https://bai-viet.scienceforeconomics.com/">Bài viết</a></div>
				<div><a id="nav-btn-3" className="no-style-hlink" href="/ve-chung-toi/">Về chúng tôi</a></div>
				<div><a id="nav-btn-4" className="no-style-hlink" href="/ket-noi/">Kết nối</a></div>
			</div>
		</div>
	);
}

