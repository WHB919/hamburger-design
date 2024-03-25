import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button, { ButtonProp } from './button'

// test('our first react test case', () => {
//   //先取得一个wrapper对象，利用queryByText方法找element是否为
//   const wrapper = render(<Button>Nice</Button>)
//   const element = wrapper.queryByText('Nice')
//   expect(element).toBeTruthy()
//   //直接获取网页上的dom
//   expect(element).toBeInTheDocument()
// })

const defaultprops = {
  onClick: jest.fn(),
}

const testProps: ButtonProp = {
  btnType: 'primary',
  size: 'lg',
  className: 'hamburger',
}

const disabledProps: ButtonProp = {
  disabled: true,
  // onClick: jest.fn(),
}

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultprops}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    //直接获取网页上的dom
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('hamburgerButton hamburgerButton--default ')
    fireEvent.click(element)
    expect(defaultprops.onClick).toHaveBeenCalled()
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    //直接获取网页上的dom
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('hamburgerButton--primary hamburgerButton--lg hamburger')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType="link" href="http://dummyurl">
        Link
      </Button>
    )
    const element = wrapper.getByText('Link')
    //直接获取网页上的dom
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('hamburgerButton hamburgerButton--link')
  })

  it('should render disabled button', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    //直接获取网页上的dom
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    // fireEvent用来触发不同的event事件
    fireEvent.click(element)
    // expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
