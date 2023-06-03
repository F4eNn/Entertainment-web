import { H1 } from '@/components/GeneralUI/H1'
import { Card } from '../AuthUI/Card'
import { Input } from '../AuthUI/input'
import { Submit } from '../AuthUI/Submit'

export const Login = () => {
    
	return (
		<Card>
			<H1>Login</H1>
			<label
				htmlFor='email'
				aria-label='Email addresss'></label>
			<Input
				id='email'
				type='email'
				placeholder='Email address'
			/>
			<label
				htmlFor='password'
				aria-label='password'></label>
			<Input
				id='password'
				type='password'
				placeholder='password'
			/>
			<Submit>Login to your account</Submit>
		</Card>
	)
}
