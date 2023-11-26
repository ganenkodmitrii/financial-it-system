import { ReactNode } from 'react';
import { Layout as AppLayout } from 'antd';
import { Menu } from 'components';

type Props = { children?: ReactNode };

export const Layout = ({ children }: Props) => (
  <AppLayout>
    <AppLayout.Header>
      <Menu />
    </AppLayout.Header>
    <AppLayout.Content style={{ padding: '0 50px' }}>{children}</AppLayout.Content>
    <AppLayout.Footer style={{ textAlign: 'center' }}>
      ASEM ©2023 Created by Ganenco Dmitri
    </AppLayout.Footer>
  </AppLayout>
);
