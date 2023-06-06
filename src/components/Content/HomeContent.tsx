'use client'
import styled from 'styled-components'

import { useEffect, useState } from 'react'
import { DataMovies } from '../Trending/Trending'
import { GridItem } from './GridItem'

const ContentContainer = styled.div`
	width: 95%;
	margin-inline: auto;
	font-size: clamp(1em, 2vw, 1.3em);
	@media (min-width: 1440px) {
		font-size: clamp(1em, 1vw, 6em);
	}
`
export const H2 = styled.h2`
	font-size: 1.9em;
	font-weight: 300;
`
const Grid = styled.div`
	margin-top: 3rem;
	display: grid;
	justify-content: center;
	gap: 30px;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	@media (min-width: 576px) {
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}
	@media (min-width: 1440px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

export const HomeContent = () => {
	const [data, setData] = useState<DataMovies[]>([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const getAllItems = async () => {
			const response = await fetch('./data.json')
			const data = await response.json()
			setData(data)
		}
		getAllItems()
	}, [])
	const allMovies = data.filter((item): item is DataMovies => item.isTrending === false)

	const movieItem = allMovies.map((movie, index) => (
		<GridItem
			key={index}
			{...movie}
		/>
	))

	return (
		<ContentContainer>
			<H2>Recomendet for you</H2>
			<Grid>{movieItem}</Grid>
		</ContentContainer>
	)
}
