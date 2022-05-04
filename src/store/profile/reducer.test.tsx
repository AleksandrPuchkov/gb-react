import { changeName, toggleProfile } from './actions'
import { profileReducer } from './reducer'

it('name should be changed', () => {
    const action = changeName("Default test name")
    const state = {
        visible: true,
        name: 'default'
    }
    const newState = profileReducer(state, action)
    expect(newState.name).toBe('Default test name')
})

it('profile should be toggled', () => {
    const action = toggleProfile()
    const state = {
        visible: true,
        name: 'default'
    }
    const newState = profileReducer(state, action)
    expect(newState.visible).toBeFalsy()
})
