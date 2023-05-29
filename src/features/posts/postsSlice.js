import { createSlice } from '@reduxjs/toolkit';

//state
const initialState = [
	{
		id: '1',
		title: 'Learning Redux Toolkit',
		content: "I've heard good things about redux",
	},
	{
		id: '2',
		title: '...slices',
		content: 'The more I say slice, the more I want pizza',
	},
];

export const postsSlice = createSlice({
	//actions
	name: 'posts',
	initialState, //declared state from above

	//payload
	reducers: {
		postAdded(state, action) {
			state.push(action.payload);
		},
	},
});

export const selectAllPosts = (state) => state.posts;

//to export postAdded Action Creator
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
