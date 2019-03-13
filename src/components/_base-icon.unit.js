import BaseIcon from './_base-icon'

describe('@components/_base-icon', () => {
  it('renders a font-awesome icon', () => {
    const { element } = mount(BaseIcon, {
      propsData: {
        name: 'sync',
      },
    })

    expect(element.tagName).toEqual('SPAN')
    expect(element.classList).toContain('small', 'baseIcon')
  })

  it('renders a custom icon', () => {
    const { element } = shallowMount(BaseIcon, {
      ...createComponentMocks({
        style: {
          iconCustomSomeIcon: 'small baseIcon',
        },
      }),
      propsData: {
        source: 'ehealth',
        name: 'some-icon',
      },
    })

    expect(element.className).toEqual('small baseIcon')
  })
})
