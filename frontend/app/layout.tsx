import "../styles/globals.css"; // Change this line
import NavigationBar from "./components/NavigationBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
        </body>
    </html>
  );
}

