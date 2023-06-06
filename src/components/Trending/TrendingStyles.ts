import styled from 'styled-components'
import Slider from 'react-slick'
export const TrendingContainer = styled.div`
	width: 95%;
	margin-inline: auto;
	margin-top: 2rem;
	font-size: clamp(1em, 2vw, 1.4em);
	@media (min-width: 1440px){
		font-size: clamp(1em, 1vw, 4.5em);

	}
`
export const H1 = styled.h1`
	font-weight: 300;
	margin: 0 auto;
`

export const StyledSlider = styled(Slider)`
	.slick-slide {
		padding: 2rem 1rem;
		cursor: grab;
	}
`

export const ItemBox = styled.div`
	height: 180px;
	position: relative;
	cursor: grab;

	@media (min-width: 576px) {
		height: 220px;
	}
	@media (min-width: 768px) {
		height: 250px;
	}
	@media (min-width: 1440px) {
		height: 25vh;
	}
`
