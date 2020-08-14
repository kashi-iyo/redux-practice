import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectAllPosts, fetchPosts } from './postsSlice'

const PostExcerpt = ({ post }) => {
    return (
        <article className="post-excerpt" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
                詳細を見る
            </Link>
            <ReactionButtons post={post} />
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
        </article>
    )
}

export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)

    const postsStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus, dispatch])

    let content
    if (postsStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (postsStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

        content = orderedPosts.map(post => 
            <PostExcerpt key={post.id} post={post} />
        )
    } else if (postsStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}