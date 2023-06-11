'use client'

import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { GridItem } from './GridItem'
import { GridCard } from '../UI/GridCard'

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
export const HomeContent = () => {
	const { filteredItems } = useContext(MoviesContext)

	const homeMoviesItem = filteredItems.map((item, index) => {
		if (!item?.isTrending && item) {
			return (
				<GridItem
					key={index}
					{...item}
					index={index}
				/>
			)
		}
	})

	return (
		<div className=' w-full mx-auto mt-9 lg:w-full'>
			<h2 className='text-2xl xs:text-3xl lg:4-xl'>Recomendet for you</h2>
			<GridCard>{homeMoviesItem}</GridCard>
		</div>
	)
}
