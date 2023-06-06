import { Browser } from '@/components/Browser/Browser'
import { Trending } from '@/components/Trending/Trending'
import { HomeContent } from '@/components/Content/HomeContent'
export default function Home() {
	return (
		<main style={{ overflow: 'hidden' }}>
			<Browser />
			<Trending />
			<HomeContent />
		</main>
	)
}
