'use client'
import styled from 'styled-components'
import { Login } from '@/components/Authentication/Login/Login'

const StyledMain = styled.main`
	display: flex;
	justify-content: center;
  align-items: center;
`

export default function Home() {
	return (
		<StyledMain>
			<Login />
		</StyledMain>
	)
}
