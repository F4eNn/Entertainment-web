'use client'
import { useEffect, useState } from 'react'
import { Thumbnail } from '../UI/Thumbnail'
import { Details } from '../UI/Details'
import { BookmarkButton } from '../UI/BookmarkButton'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



export const TrendingContainer = styled.div`
	width: 95%;
	margin-inline: auto;
	margin-top: 2rem;
	font-size: clamp(1em, 2vw, 1.4em);
	@media (min-width: 1440px) {
		font-size: clamp(1em, 1vw, 4.5em);
	}
`
export const H1 = styled.h1`
	font-weight: 300;
	margin: 0 auto;
`

export const StyledSlider = styled(Slider)`
	.slick-slide {
		padding: 2rem 1rem;
		cursor: grab;
	}
`

export const ItemBox = styled.div`
	height: 180px;
	position: relative;
	cursor: grab;

	@media (min-width: 576px) {
		height: 220px;
	}
	@media (min-width: 768px) {
		height: 250px;
	}
	@media (min-width: 1440px) {
		height: 25vh;
	}
`

export type DataMovies = {
	thumbnail: {
		trending: { [size: string]: string }
		regular: { [size: string]: string }
	}
	rating: string
	category: string
	title: string
	year: number
	isTrending: boolean
}

export const Trending = () => {
	const [data, setData] = useState<DataMovies[]>([])

	const settings = {
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 2000,
		slidesToShow: 3,
		swipeToSlide: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					centerPadding: '50px',

					slidesToShow: 2.2,
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

	const isTrendingArr = data.filter((item): item is DataMovies => item.isTrending === true)

	return (
		<>
			<TrendingContainer>
				<H1>Trending</H1>
				<StyledSlider {...settings}>
					{isTrendingArr.map((item, index) => (
						<ItemBox key={index}>
							<Thumbnail
								image={item.thumbnail.trending?.large}
								alt={item.title}>
								<Details
									category={item.category}
									rating={item.rating}
									title={item.title}
									year={item.year}
								/>
							</Thumbnail>

							<BookmarkButton />
						</ItemBox>
					))}
				</StyledSlider>
			</TrendingContainer>
		</>
	)
}
