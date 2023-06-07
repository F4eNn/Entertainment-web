'use client'
import styled from 'styled-components'
import { MoviesContext } from '@/store/moviesContext'
import { useContext } from 'react'

import { useApi } from '@/hooks/useApi'
import { useFilterArr } from '@/hooks/useFilterArr'
export const ContentContainer = styled.div`
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
export const Grid = styled.div`
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
	const query = 'isTrending'
	const value = false
	const { relevantDataArr: homeMovies, allItemsArr } = useApi(query, value)
	const { filteredItems } = useFilterArr(allItemsArr)
	const moviesCtx = useContext(MoviesContext)
	const content = moviesCtx.isInputEmpty ? homeMovies : filteredItems

	

	return (
		<ContentContainer>
			<H2>Recomendet for you</H2>
			<Grid>{content}</Grid>
		</ContentContainer>
	)
}
