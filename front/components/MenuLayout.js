import React from 'react';
import {Menu} from 'antd';
import Link from 'next/link';
import {EditOutlined, UnorderedListOutlined} from '@ant-design/icons';

const items = [
    {
        label: <Link href="/"><a>리뷰 목록 보기</a></Link>,
        icon: <UnorderedListOutlined />,
        key: 'list'
    },
    {
        label: <Link href="/list"><a>리뷰 등록하러 가기</a></Link>,
        icon: <EditOutlined />,
        key: 'write'
    },
    

]

const MenuLayout = () => {

    return (
        <>
        <Menu
            mode={'horizontal'}
            defaultSelectedKeys={['list']}
            items={items}
        />
        </>
    );
};

export default MenuLayout;