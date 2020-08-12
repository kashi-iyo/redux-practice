import React from 'react'
import { useDispatch } from 'react-redux'

import { reactionAdded } from './postsSlice'

const reactionString = {
    vertGood: '秀',
    good: '良',
    normal: '可',
    bad: '不'
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionString).map(([name, string]) => {
        console.log(post.reactions[name])
        return (
            <button
                key={name}
                type="button"
                className="muted-button reaction-button"
                onClick={() => 
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {string} {post.reactions[name]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}