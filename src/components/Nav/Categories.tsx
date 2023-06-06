import styled from 'styled-components'
import { MovieIcon } from '../Icons/MovieIcon'
import { HomeIcon } from '../Icons/HomeIcon'
import { TvSeriesIcon } from '../Icons/TvSeriesIcon'
import { BookmarkIcon } from '../Icons/BookmarkIcon'
import { useRef } from 'react'
import Link from 'next/link'

const LinkContainer = styled.div`
	display: flex;
	gap: 2rem;
	& svg {
		fill: #5a698f;
		transition: fill 0.3s;
	}
	& svg:hover {
		fill: var(--red);
	}
	& svg .active {
		fill: var(--white);
	}
	@media (min-width: 768px) {
		gap: 3.5rem;
	}
	@media (min-width: 1024px) {
		flex-direction: column;
		margin: 5rem 0 auto 0;
	}
`
export const StyledLink = styled(Link)`
	position: relative;
	border: none;
	cursor: pointer;
`
export const Categories = () => {
	const linkContainerRef = useRef<HTMLDivElement>(null)

	const addActive = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as Node
		linkContainerRef.current?.childNodes.forEach(category => {
			category.childNodes.forEach(svg => (svg.firstChild as SVGAElement).classList.remove('active'))
		})
		if (!target.firstChild) {
			;(target as SVGAElement).classList.add('active')
		} else {
			;(target.firstChild as SVGAElement).classList.add('active')
		}
	}

	// Zrobić pętle useEffect później zeby pobrac aktualny active

	return (
		<LinkContainer
			ref={linkContainerRef}
			onClick={addActive}>
			<StyledLink href='/'>
				<HomeIcon />
			</StyledLink>
			<StyledLink href='/movies'>
				<MovieIcon />
			</StyledLink>
			<StyledLink href='/series'>
				<TvSeriesIcon />
			</StyledLink>
			<StyledLink href='/bookmarks'>
				<BookmarkIcon />
			</StyledLink>
		</LinkContainer>
	)
}
