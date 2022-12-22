import React from 'react';
import { Layout, theme } from 'antd';
import { CustomRoutes } from './routes';
import { TopMenu } from './components/TopMenu/TopMenu';

// const menuTitle = [
//     { key: 1, label: '關於網站' },
//     { key: 2, label: '區塊鏈' },
//     { key: 3, label: '爬蟲' },
//     { key: 4, label: '附近廁所' },
// ];

const { Header, Content, Footer } = Layout;
const App = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <TopMenu />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <CustomRoutes />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default App;
