'use client'
import { useEffect, useState } from 'react'
import { Thumbnail } from '../UI/Thumbnail'
import { H1, ItemBox, TrendingContainer } from './TrendingStyles'
import { Details } from '../UI/Details'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export type DataTrending = {
	thumbnail: { trending: { [size: string]: string } }
	rating: string
	category: string
	title: string
	year: number
}
export const Trending = () => {
	const [data, setData] = useState<DataTrending[]>([])

	const settings = {
		className: 'center',
		infinite: false,
		centerPadding: '100px',
		slidesToShow: 2.5,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerPadding: '50px',

					slidesToShow: 1.5,
				},
			},
			{
				breakpoint: 374,
				settings: {
					centerPadding: '50px',

					slidesToShow: 1.2,
				},
			},
		],
	}

	useEffect(() => {
		const createApi = async () => {
			const response = await fetch('./data.json')
			const data = await response.json()
			setData(data)
		}
		createApi()

		return () => {
			setData([])
		}
	}, [])

	const trendingArr = data.slice(0, 5)

	return (
		<>
			<TrendingContainer>
				<H1>Trending</H1>
				<Slider {...settings}>
					{trendingArr.map((item, index) => (
						<ItemBox key={index}>
							<Thumbnail
								image={item.thumbnail.trending?.large}
								alt={item.title}
							/>
							<Details
								category={item.category}
								rating={item.rating}
								title={item.title}
								year={item.year}
							/>
						</ItemBox>
					))}
				</Slider>
			</TrendingContainer>
		</>
	)
}
