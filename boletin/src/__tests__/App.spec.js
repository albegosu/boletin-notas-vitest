import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { App } from '../App.vue'

describe('App', () => {
  it('renders a header', () => {
    const wrapper = mount(App)
    expect(wrapper.find('header').exists()).toBe(true)
  })
})

describe('App', () => {
  it('renders a main', () => {
    const wrapper = mount(App)
    expect(wrapper.find('main').exists()).toBe(true)
  })
})