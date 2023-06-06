import styled from 'styled-components'
import { Thumbnail } from '../UI/Thumbnail'
import { BookmarkButton } from '../UI/BookmarkButton'
import { Details } from '../UI/Details'
import { DataMovies } from '../Trending/Trending'

const Box = styled.div`
	position: relative;
	margin-inline: auto;
	width: 100%;
	aspect-ratio: 1;
`
const ImageBox = styled.div`
	position: relative;
	height: 80%;
	width: 100%;
	border-radius: var(--radius-md);
	background-color: lightblue;
`
const StyledDetails = styled.div`
	display: flex;
	align-content: flex-start;
	margin-top: 1rem;
	padding: 1rem;
	font-size: .84em;
`

export const GridItem = ({ category, rating, title, thumbnail, year }: DataMovies) => {
	return (
		<Box>
			<ImageBox>
				<Thumbnail
					image={thumbnail.regular.large}
					alt={title}
				/>
				<BookmarkButton />
			</ImageBox>
			<StyledDetails>
				<Details
					category={category}
					rating={rating}
					title={title}
					year={year}
				/>
			</StyledDetails>
		</Box>
	)
}
