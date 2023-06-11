'use client'
import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { MovieInfo } from '../UI/MovieInfo'
import { AddToBookmark } from './AddToBookmark'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
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
		<div className='w-full mx-auto mt-7 '>
			<h1 className='text-2xl mb-4'>Trending</h1>
			<Swiper {...swiperSettings}>
				{filteredItems.map((item, index) => {
					if (item && item.isTrending) {
						return (
							<SwiperSlide key={index}>
								<AddToBookmark
									index={index}
									isBookmarked={item.isBookmarked}
								/>
								<div className='relative w-full h-[150px] xs:h-[200px] xl:h-[250px]'>
									<picture>
										<source
											media='(max-width: 475px)'
											srcSet={item.thumbnail.trending.small}
										/>
										<Image
											src={`/${item.thumbnail.trending.large}`}
											alt={item.title}
											fill
											sizes='auto'
											className='pointer-events-none rounded-radius-md'
										/>
									</picture>
								</div>
								<div className='absolute bottom-2 left-2 text-sm xs:bottom-4 xs:left-4 '>
									<MovieInfo {...item} />
								</div>
							</SwiperSlide>
						)
					}
				})}
			</Swiper>
		</div>
	)
}