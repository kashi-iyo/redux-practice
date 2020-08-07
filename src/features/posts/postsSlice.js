import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: '初投稿です', content: 'こんにちは' },
    { id: '2', title: '2度目の投稿です', content: 'こんばんは' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export default postsSlice.reducer

export const { postAdded } = postsSlice.actions