import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: '佐藤 マイケル' },
    { id: '1', name: '田中 マルクス' },
    { id: '2', name: '鈴木 イチロー'  },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer