import BarChart from '@/components/BarChart';
import Header from '@/components/Header';
import Orders from '@/components/Orders';
import TopCards from '@/components/TopCards';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TopCards />
			<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
				<BarChart />
				<Orders />
			</div>
		</>
	);
}
