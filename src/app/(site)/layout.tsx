import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

// Pages in this group get the navbar and footer. The 404 page sits outside
// the group, so it renders without them.
export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
