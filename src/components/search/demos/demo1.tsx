import React, { useRef } from 'react'
import { Button, Search, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { SearchRef } from 'antd-mobile/es/components/search'

export default () => {
  const searchRef = useRef<SearchRef>(null)
  return (
    <>
      <DemoBlock title='基础用法'>
        <Search placeholder='请输入内容' />
      </DemoBlock>
      <DemoBlock title='带取消按钮的搜索框'>
        <Search placeholder='请输入内容' showCancelButton />
      </DemoBlock>
      <DemoBlock title='取消按钮长显'>
        <Search placeholder='请输入内容' showCancelButton={() => true} />
      </DemoBlock>
      <DemoBlock title='事件监听和 Ref'>
        <Space block direction='vertical'>
          <Search
            ref={searchRef}
            placeholder='请输入内容'
            showCancelButton
            onSearch={val => {
              Toast.show(`你搜索了：${val}`)
            }}
            onFocus={() => {
              Toast.show('获得焦点')
            }}
            onBlur={() => {
              Toast.show('失去焦点')
            }}
            onClear={() => {
              Toast.show('清空内容')
            }}
            onCancel={() => {
              Toast.show('取消搜索')
            }}
          />
          <Space>
            <Button
              onClick={() => {
                searchRef.current?.clear()
              }}
            >
              清空内容
            </Button>
            <Button
              onClick={() => {
                searchRef.current?.focus()
              }}
            >
              激活
            </Button>
          </Space>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义样式'>
        <Search
          placeholder='请输入内容'
          showCancelButton
          style={{
            '--border-radius': '100px',
            '--background': '#ffffff',
          }}
        />
      </DemoBlock>
    </>
  )
}
