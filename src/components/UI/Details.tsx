import styled from 'styled-components'
import { DataMovies } from '../Trending/Trending'
import { MovieIcon } from '../Icons/MovieIcon'
import { TvSeriesIcon } from '../Icons/TvSeriesIcon'



const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 27%;
	gap: 5px;
`
const Dot = styled.span`
	height: 5px;
	width: 5px;
	border-radius: 50%;
	background-color: var(--gray);
`
const InfoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	z-index: 200;
`
const H3 = styled.h3`
	font-size: 1.3em;
`
const StyledDiv = styled.div`
	z-index: 200;
`

export const Details = ({ rating, category, title, year }: Partial<DataMovies>) => {
	const isMovie = category === 'Movie' ? <MovieIcon fill='var(--white)' /> : <TvSeriesIcon fill='var(--white)' />
	return (
		<Card>
			<InfoBox>
				<span>{year}</span>
				<Dot />
				{isMovie}
				<span>{category}</span>
				<Dot />
				<span>{rating}</span>
			</InfoBox>
			<StyledDiv>
				<H3>{title}</H3>
			</StyledDiv>
		</Card>
	)
}
