import { Inter } from "next/font/google";
import LargeHeading from "./components/ui/LargeHeading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <LargeHeading>dd</LargeHeading>
    </main>
  );
}
