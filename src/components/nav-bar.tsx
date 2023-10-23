'use client'
import '@/styles/navbar.css'
import '@/app/globals.css'
import Link from 'next/link';
import debounce from '@/utils/debounce';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BurgerBtn from '@/images/svg/burger-btn.svg'
import { usePathname } from "next/navigation";

export default function NavBar () {
	const [stick, setStick] = useState<boolean>(false);

	const pathname = usePathname();

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
		<div className={`nav-bar${stick ? " stick" : ''}`}>
			<div className="logo"><Link className="no-style-hlink" href="/"><span>S</span>ci<span>E</span>co</Link></div>
			<div className="wrap-btn">
				<div><Link id="nav-btn-1" className={`no-style-hlink${pathname == '/' ? ' active' : ''}`} href="/">Trang chủ</Link></div>
				<div><Link id="nav-btn-2" className={`no-style-hlink${pathname.includes('dich-vu') ? ' active' : ''}`} href="/dich-vu/">Dịch vụ</Link></div>
				<div><Link id="nav-btn-5" className={`no-style-hlink${pathname.includes('bai-viet') ? ' active' : ''}`} href="/bai-viet/">Bài viết</Link></div>
				<div><Link id="nav-btn-3" className={`no-style-hlink${pathname.includes('ve-chung-toi') ? ' active' : ''}`} href="/ve-chung-toi/">Về chúng tôi</Link></div>
				<div><Link id="nav-btn-4" className={`no-style-hlink${pathname.includes('ket-noi') ? ' active' : ''}`} href="/ket-noi/">Kết nối</Link></div>
			</div>
			<Image id="burger-btn" alt='burger button' src={BurgerBtn} width="39" height="39" />
		</div>
	);
}

