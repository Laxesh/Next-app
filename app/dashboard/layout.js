import Footer from "@/components/ui/Footer";

export default function DashboardLayout({ children }) {
  return (
    <>
      <body>
        <div className="">{children}</div>
      </body>
      <Footer />
    </>
  );
}
