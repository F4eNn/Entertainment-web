import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Carousel = styled(motion.div)`
	background-color: transparent;
	width: 100%;
	margin-top: 3rem;
	cursor: grab;
	overflow: hidden;
`
export const InnerCarousel = styled(motion.div)`
	display: flex;
	padding-left: 1rem;
	gap: 15px;
	background-color: transparent;
`
export const ItemBox = styled(motion.div)`
	min-width: 60vw;
	min-height: 150px;
	pointer-events: none;
	position: relative;
`
