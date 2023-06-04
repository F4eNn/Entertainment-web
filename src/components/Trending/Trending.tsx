'use client'
import { useEffect, useState } from 'react'
import { Thumbnail } from '../UI/Thumbnail'
import { Carousel, InnerCarousel, ItemBox } from './TrendingStyles'
import { Details } from '../UI/Details'

type DataTrending = {
	title: string
	thumbnail: { trending: { [size: string]: string } }
}
export const Trending = () => {
	const [data, setData] = useState<DataTrending[]>([])

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
	const trendinsg = data.map(item => console.log(item))
	const trendingItem = trendingArr.map(item => (
		<ItemBox key={item.title}>
			<Thumbnail
				image={item.thumbnail.trending?.large}
				alt={item.title}
			/>
			<Details />
		</ItemBox>
	))

	return (
		<Carousel>
			<InnerCarousel
				drag='x'
				dragConstraints={{ right: 0 }}>
				{trendingItem}
			</InnerCarousel>
		</Carousel>
	)
}
