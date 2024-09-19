import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter 
      copyright="2024 Your Company"
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'Harmony EMR',
          title: 'Harmony EMR',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: '#',
          blankTarget: true,
        },
        {
          key: 'Harmony UI',
          title: 'Harmony UI',
          href: 'https://github.com/jcafranca/Harmony',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;