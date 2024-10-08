import type { Metadata } from "next";
import "./globals.css";
import logo from "./logo.png";
import Header from "@/components/Header";
import MyProvider from "@/context/mycontext";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
	title: "Product Hunt Clone",
	description: "Generated by create next app",
	icons: `${logo.src}`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className="flex flex-col min-h-screen">
					<MyProvider>
						<Header />
						{children}
					</MyProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
