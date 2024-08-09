import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import 'react-loading-skeleton/dist/skeleton.css';

import JotaiProvider from '@providers/jotaiProvider';
import QueryClientProvider from '@providers/queryClientProvider';
import Layout from '@organisms/Layout';

type CustomApp = AppProps;

const Debug = () => {
	return null;
};

const App = ({ Component, pageProps }: CustomApp) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="height=device-height,
                      width=device-width, initial-scale=1.0,
                      minimum-scale=1.0, maximum-scale=1.0,
                      user-scalable=no, target-densitydpi=device-dpi"
				/>
			</Head>
			<QueryClientProvider>
				<JotaiProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
					<Debug />
				</JotaiProvider>
			</QueryClientProvider>
		</>
	);
};

export default App;
