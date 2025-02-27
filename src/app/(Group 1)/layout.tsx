import './../globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header>그룹1 레이아웃</header>
        {children}
      </body>
    </html>
  );
}