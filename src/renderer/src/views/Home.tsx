import React from 'react'
import { theme } from 'antd'

const Home: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <div className="h-full flex-1 flex flex-row mx-2.5 gap-2.5">
      <aside
        className="w-5/24"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}
      />
      <main
        className="w-14/24"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}
      ></main>
      <aside
        className="w-5/24"
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}
      />
    </div>
  )
}

export default Home
