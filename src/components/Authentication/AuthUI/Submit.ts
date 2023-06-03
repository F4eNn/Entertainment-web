import styled from 'styled-components'

export const Submit = styled.button`
	width: 100%;
	padding: 0.7rem 0 0.7rem;
	background-color: var(--red);
	border-radius: var(--radius-sm);
    color: var(--white);
	cursor: pointer;
	transition: background-color 0.3s;
	&:hover {
		background-color: var(--white);
	}
`
