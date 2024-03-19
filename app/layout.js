import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nourish",
  description: "Meal Plan Generator",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          
          <TopBar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
