import { Browser } from '@/components/Browser/Browser'
import { HomeContent } from '@/components/Content/HomeContent'
import { Trending } from '@/components/Trending/Trending'
export default function Home() {
	return (
		<main style={{overflow: 'hidden'}}>
			<Browser />
			<Trending />
			<HomeContent />
		</main>
	)
}
