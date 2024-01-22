import { Inter } from "next/font/google";
import Navigation from "@/ui/Navigation"
import { MenuProvider } from "@/context/MenuContext";
import Content from "@/ui/Content";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MenuProvider>
      <main className=""
    >
        <Navigation/>
        <Content/>
    </main>
    </MenuProvider>
  );
}
