import SideNav from './ui/dashboard/sidenav';
import { monserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monserrat.className}, antialiased`}>
      <body>
        {children}
        <footer className="flex justify-center py-10">
          Esto esta hecho con amor :heart{' '}
        </footer>
      </body>
    </html>
  );
}
