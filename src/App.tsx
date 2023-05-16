import { Button, ConfigProvider } from 'antd';
2
function App() {

  return (
     <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Button type="primary">Test</Button>
  </ConfigProvider>
  )
}

export default App
