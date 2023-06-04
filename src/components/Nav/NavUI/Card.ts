import styled from 'styled-components'

export const Card = styled.div`
	background-color: var(--semi-dark-blue);
	padding: 1.8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--white);
    @media (min-width: 768px){
        width: 90%;
        border-radius: var(--radius-md);
        margin-inline: auto
    }
    @media (min-width: 1024px){
        flex-direction: column;
        width: 75px;
        margin: 1.5rem;
    }
`
