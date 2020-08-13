import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'
import { selectPostById } from './postsSlice'

export const EditPostForm = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state => selectPostById(state, postId))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch()
    const history = useHistory()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({ id: postId, title, content }))
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>編集</h2>
            <form>
                <label htmlFor="postTitle">タイトル: </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">内容: </label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>
                    保存
                </button>
            </form>
        </section>
    )
}