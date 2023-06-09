import './globals.css'
import { Outfit } from 'next/font/google'
const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
	title: 'Entertainment web',
	description: 'looking for your favourite movie',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={outfit.className}>{children}</body>
		</html>
	)
}
