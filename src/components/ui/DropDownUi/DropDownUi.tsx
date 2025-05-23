import React from 'react';
import { Button, Space } from 'antd';

export const MyButton: React.FC = () => {
    console.log('rendered')

    return (
        <Space>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
        </Space>
    );
}