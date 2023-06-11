'use client'
import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { CarouselItem } from './CarouselItem'
export const CarouselTrending = () => {
	const { filteredItems } = useContext(MoviesContext)
	SwiperCore.use([Autoplay])

	const swiperSettings = {
		slidesPerView: 1.2,
		spaceBetween: 10,
		grabCursor: true,
		speed: 2000,
		initialSlide: 0,

		breakpoints: {
			475: {
				spaceBetween: 20,
			},
			768: {
				spaceBetween: 35,
				slidesPerView: 1.7,
			},
			992: {
				slidesPerView: 2.6,
			},
		},
	}

	return (
		<div className='w-full mx-auto mt-7 mb-6 '>
			<h1 className='text-2xl mb-4 xs:text-3xl md:text-4xl'>Trending</h1>
			<Swiper {...swiperSettings}>
				{filteredItems.map((item, index) => {
					if (item && item.isTrending) {
						return (
							<SwiperSlide key={index}>
								<CarouselItem
									index={index}
									{...item}
								/>
							</SwiperSlide>
						)
					}
				})}
			</Swiper>
		</div>
	)
}
