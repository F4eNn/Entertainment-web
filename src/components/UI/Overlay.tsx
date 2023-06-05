import styled from 'styled-components'
import Image from 'next/image'

const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #00000057;
	z-index: 100;
`
const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 0.5rem 1.5rem 0.5rem 0.5rem;
	color: var(--white);
	border-radius: 25px;
	border: none;
	background-color: #ffffff58;
	font-size: 1em;
	cursor: pointer;
	transition: background-color 0.3s;
	&:hover {
		background-color: #ffffff92;
	}
`
export const Overlay = () => {
	return (
		<Card>
			<Button>
				<Image
					src='./assets/icon-play.svg'
					alt='play button'
					width={25}
					height={25}
				/>
				Play
			</Button>
		</Card>
	)
}
