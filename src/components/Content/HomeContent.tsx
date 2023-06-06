'use client'
import styled from 'styled-components'
import { useApi } from '@/hooks/useApi'
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
	const { relevantDataArr: allStuff, filteredArr: allStuffArr } = useApi(query, value)

	return (
		<ContentContainer>
			<H2>Recomendet for you</H2>
			<Grid>{allStuff}</Grid>
		</ContentContainer>
	)
}
