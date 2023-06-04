import styled from 'styled-components'

const Card = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 50px;
	background-color: orange;
`

export const Details = () => {
	return <Card>
        <span>2019</span>
    </Card>
}
