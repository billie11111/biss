import './globals.css'
import StyledComponentsRegistry from '../lib/registry';
import Recoil from './components/common/Recoil';

export const metadata = {
  title: 'BISS',
  description: '계룡군문화 축제와 함께하는 나만을 챙기는 방법 알아보기',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
        <body>
          <StyledComponentsRegistry>
            <Recoil>
              {children}
            </Recoil>
          </StyledComponentsRegistry>
        </body>
      </html>
  )
}
