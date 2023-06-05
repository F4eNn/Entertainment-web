import styled from 'styled-components'
import { DataTrending } from '../Trending/Trending'
import { MovieIcon } from '../Nav/NavUI/Icons/MovieIcon'
import { TvSeriesIcon } from '../Nav/NavUI/Icons/TvSeriesIcon'

const Card = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100px;
	gap: 5px;
	padding: 0 0 1.5rem 2rem;
`
const Dot = styled.span`
	height: 5px;
	width: 5px;
	border-radius: 50%;
	background-color: var(--gray);
	z-index: 100;
`
const InfoBox = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`
const H3 = styled.h3`
	font-size: 1.3em;
`

export const Details = ({ rating, category, title, year }: Partial<DataTrending>) => {
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
			<div>
				<H3>{title}</H3>
			</div>
		</Card>
	)
}
