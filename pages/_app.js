import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<Sidebar>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Sidebar>
	);
}
