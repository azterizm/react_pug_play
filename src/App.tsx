import { lazy, Suspense } from 'react'
import './App.styl'

const Counter = lazy(() => import('./Counter'))

export const App = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Counter />
		</Suspense>
	)
}
