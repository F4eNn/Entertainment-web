import styled from 'styled-components'

export const Input = styled.input`
	width: 100%;
	border: none;
	background-color: transparent;
	padding: 0.5rem 0 0.5rem;
	margin-left: 1.5rem;
	outline: none;
	caret-color: var(--red);
	color: var(--white);
	font-size: 1em;
	&:focus {
		border-bottom: 1px solid var(--greyish-blue);
	}
`
export const Container = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	margin-inline: auto;
	width: 90%;
	font-size: clamp(1.5em, 2.1vw, 2em);
`
