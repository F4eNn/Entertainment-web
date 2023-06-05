'use client'
import styled from 'styled-components'
import { BookmarkButton } from '../UI/BookmarkButton'
import { Details } from '../UI/Details'
const ContentContainer = styled.div`
	width: 95%;
	margin-inline: auto;
	font-size: clamp(1em, 2vw, 1.5em);
`
export const H2 = styled.h2`
	font-size: 1.9em;
	font-weight: 300;
`
const Grid = styled.div`
	margin-top: 3rem;
	display: grid;
	justify-content: center;
	gap: 15px;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`
const GridItem = styled.div`
	position: relative;
	margin-inline: auto;
	width: 85%;
	height: 200px;
	background-color: red;
	border-radius: var(--radius-md);
	overflow: hidden;
`
const ImageBox = styled.div`
	height: 60%;
	width: 100%;
	background-color: lightblue;
`

export const HomeContent = () => {
	return (
		<ContentContainer>
			<H2>Recomendet for you</H2>
			<Grid>
				<GridItem>
					<ImageBox>
						<BookmarkButton />
					</ImageBox>
					<Details />
				</GridItem>
			</Grid>
		</ContentContainer>
	)
}
