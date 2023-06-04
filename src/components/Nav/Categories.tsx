import styled from 'styled-components'
import { Button } from './NavUI/Button'
import { MovieIcon } from './NavUI/Icons/MovieIcon'
import { HomeIcon } from './NavUI/Icons/HomeIcon'
import { TvSeriesIcon } from './NavUI/Icons/TvSeriesIcon'
import { BookmarkIcon } from './NavUI/Icons/BookmarkIcon'
import { useRef } from 'react'

const ButtonBox = styled.div`
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
    @media (min-width: 768px){
        gap: 3.5rem;
    }
    @media (min-width: 1024px){
        flex-direction: column;
    }
`

export const Categories = () => {
	const buttonBox = useRef<HTMLDivElement>(null)

	const addActive = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as Node
		buttonBox.current?.childNodes.forEach(category => {
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
		<ButtonBox
			ref={buttonBox}
			onClick={addActive}>
			<Button>
				<HomeIcon />
			</Button>
			<Button>
				<MovieIcon />
			</Button>
			<Button>
				<TvSeriesIcon />
			</Button>
			<Button>
				<BookmarkIcon />
			</Button>
		</ButtonBox>
	)
}
