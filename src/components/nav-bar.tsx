'use client'
import styles from '@/styles/navbar.module.css'
import Link from 'next/link';
import debounce from '@/utils/debounce';
import { useEffect, useState } from 'react';

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
	useEffect(() => {
		window.addEventListener("scroll", debouncedAddStickClass)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={`${styles.navbar} ${stick ? styles.stick : ''}`}>
			<div className={styles.logo}><Link className="no-style-hlink" href="/"><span>S</span>ci<span>E</span>co</Link></div>
			<div className={styles.wrapBtn}>
				<div><Link id="nav-btn-1" className="no-style-hlink" href="/">Trang chủ</Link></div>
				<div><Link id="nav-btn-2" className="no-style-hlink" href="/dich-vu/">Dịch vụ</Link></div>
				<div><Link id="nav-btn-5" className="no-style-hlink" href="/bai-viet/">Bài viết</Link></div>
				<div><Link id="nav-btn-3" className="no-style-hlink" href="/ve-chung-toi/">Về chúng tôi</Link></div>
				<div><Link id="nav-btn-4" className="no-style-hlink" href="/ket-noi/">Kết nối</Link></div>
			</div>
		</div>
	);
}

