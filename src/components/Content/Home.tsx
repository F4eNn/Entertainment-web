'use client'
import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { GridItem } from '../UI/GridItem'
import { GridCard } from '../UI/GridCard'
import { CarouselTrending } from '@/components/carousel/CarouselTrending'
import { Browser } from '@/components/Browser/Browser'

export type DataProps = {
	title: string
	thumbnail: {
		regular: {
			small: string
			medium: string
			large: string
		}
		trending: {
			small: string
			large: string
		}
	}
	isTrending: boolean
	category: string
	isBookmarked: boolean
	rating: string
	year: number
}
export const Home = () => {
	const { filteredItems, inputValue, homeFoundedItems } = useContext(MoviesContext)
	const isEmptyInput = inputValue === ''

	const homeSection = filteredItems.map((item, index) => {
		switch (true) {
			case !isEmptyInput:
				if (item) {
					return (
						<GridItem
							key={index}
							{...item}
							index={index}
						/>
					)
				}
				break
			default:
				if (!item?.isTrending && item) {
					return (
						<GridItem
							key={index}
							{...item}
							index={index}
						/>
					)
				}
		}
	})
	const isVisibleCarousel = isEmptyInput ? <CarouselTrending /> : null

	return (
		<div className=' w-full mx-auto mt-9 lg:w-[95%]'>
			<Browser
				foundedItems={homeFoundedItems}
				placeholder='Search for movies or TV series'
			/>
			<div>{isVisibleCarousel}</div>
			<h2 className='text-2xl xs:text-3xl lg:4-xl'>Recomendet for you</h2>
			<GridCard>{homeSection}</GridCard>
		</div>
	)
}
