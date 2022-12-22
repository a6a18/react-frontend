import React from 'react';
import { Link } from 'react-router-dom';
import { TOP_MENU } from './TopMenu.constants';
import { Menu } from 'antd';

function TopMenu() {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            {TOP_MENU.map((item) => (
                <Menu.Item>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export { TopMenu };
