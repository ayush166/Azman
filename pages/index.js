import { Inter } from "next/font/google";
import Navigation from "components/layout/Navigation"
import { MenuProvider } from "@/context/MenuContext";
import Content from "components/ui/Content";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MenuProvider>
      <main className="bg-secondary-gray"
    >
        <Navigation/>
        <Content/>
    </main>
    </MenuProvider>
  );
}
