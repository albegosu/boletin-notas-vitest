import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import AppVue from '../App.vue'
import StudentComponent from '../components/StudentComponent.vue'

describe('AppVue', () => {
  test ('Check if Header and Main exist in StudentComponent', () => {
    const wrapper = mount(StudentComponent)
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
  })
  test('Check if AppVue has any child component', () => {
    const wrapper = mount(AppVue)
    expect(wrapper.findComponent(StudentComponent).exists()).toBe(true)
  })
  test('Check if some "class" exists in StudentComponent', () => {
    const wrapper = mount(StudentComponent)
    expect(wrapper.find('.classroom').exists()).toBe(true)
  })
  test('Check if some "id" is true', () => {
    const wrapper = mount(StudentComponent)
    expect(wrapper.find('#addButton').exists()).toBe(true)
  })
  
  test('Check if name on table is the same as the input', async () => {
    const wrapper = mount(StudentComponent);
    await wrapper.find('input[type="text"]').setValue('Nombre del alumno');
    await wrapper.find('#addButton').trigger('click');
    expect(wrapper.find('#myTable').text()).toContain('Nombre del alumno');
  });
  
  test('Check if subject name is the same on table as input', async () => {
    const wrapper = mount(StudentComponent);
    await wrapper.findAll('input[type="text"]')[1].setValue('Materia');
    await wrapper.find('#addButton').trigger('click');
    expect(wrapper.find('#myTable').text()).toContain('Materia');
  });

})