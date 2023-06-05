import styled from 'styled-components'

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
    @media (min-width: 768px){
        width: 95%;
        border-radius: var(--radius-md);
        margin-inline: auto
    }
    @media (min-width: 1024px){
        flex-direction: column;
        padding: 2.2rem;
        width: 75px;
    }
`
