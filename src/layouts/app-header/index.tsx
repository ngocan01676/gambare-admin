import { Spin } from 'antd'
import { useState } from 'react'

export const AppLoading = () => {
  const isLoading = useState<boolean>(false);

  return (
    isLoading && (
      <div className="app-loading">
        <div className="flex items-center">
          <Spin tip="Loading..."></Spin>
        </div>
      </div>
    )
  )
}
