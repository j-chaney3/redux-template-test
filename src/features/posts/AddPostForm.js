import { useState } from 'react';
import { useDispatch } from 'react-redux';
//generate unique id
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	//changes the states above for title and content
	const onTitleChanged = (e) => setTitle(e.target.value);
	const onContentChanged = (e) => setContent(e.target.value);

	const onSavePostClicked = () => {
		if (title && content) {
			//use dispatch to add functionality to the action creater postAdded (imported above)
			//defined in reducers of postsSlice
			dispatch(
				postAdded({
					id: nanoid(),
					title,
					content,
				})
			);

			//resets form fields to empty after submitting post
			setTitle('');
			setContent('');
		}
	};

	return (
		<section>
			<h2>Add a new post</h2>
			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor="postContent">Post Content:</label>
				<textarea
					id="postContent"
					name="postContent"
					value={content}
					onChange={onContentChanged}
				/>
				<button type="button" onClick={onSavePostClicked}>
					Save Post
				</button>
			</form>
		</section>
	);
};

export default AddPostForm;
