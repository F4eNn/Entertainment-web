import styled from 'styled-components'
export const TrendingContainer = styled.div`
	width: 100%;
	margin-top: 2rem;
	font-size: clamp(1em, 2vw, 1.5em);
`
export const H1 = styled.h1`
	width: 95%;
	font-weight: 300;
	margin: 0 auto;
`

export const ItemBox = styled.div`
	margin-left: 2.7rem;
	height: 180px;
	
	/* padding: 2rem; */
	position: relative;
	cursor: grab;

	@media (min-width: 576px) {
		height: 250px;
	}
	@media (min-width: 768px) {
		height: 275px;
	}
`
