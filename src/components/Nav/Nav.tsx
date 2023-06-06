'use client'
import styled from 'styled-components'
import { Categories } from './Categories'
import Image from 'next/image'
import Link from 'next/link'

export const Card = styled.div`
	background-color: var(--semi-dark-blue);
	padding: 1.8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--white);
	& a {
		display: flex;
		align-items: center;
	}
	@media (min-width: 768px) {
		width: 95%;
		border-radius: var(--radius-md);
		margin-inline: auto;
	}
	@media (min-width: 1024px) {
		flex-direction: column;
		padding: 2.2rem;
		width: 75px;
	}
`
const ProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		border: 2px solid var(--white);
		border-radius: 50%;
	}
`
const Img = styled(Image)`
	@media (min-width: 768px) {
		width: 30px;
		height: 25px;
	}
`

export const Nav = () => {
	return (
		<Card>
			<Link href='/'>
				<Img
					src='/assets/logo.svg'
					alt='logo'
					width={25}
					height={20}
				/>
			</Link>
			<Categories />
			<ProfileContainer>
				<Image
					src='/assets/image-avatar.png'
					alt='logo'
					width={27}
					height={27}
				/>
			</ProfileContainer>
		</Card>
	)
}
