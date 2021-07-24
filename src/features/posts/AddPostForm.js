import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdded } from './postsSlice';

export const AddPostForm=()=>{
  const [ title, setTitle ] = useState( '' )
  const [ content, setContent ] = useState( '' )

  const dispatch = useDispatch()
  
  const onTitleChanged = e => setTitle( e.target.value )
  const onContentChanged = e => setContent( e.target.value )
  
  const savePostClicked = () => {
    if ( title && content ) {
      dispatch(
        postAdded( {
          id: nanoid(),
          title,
          content
        })
      )

      setTitle( '' )
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTile">Post Title: </label>
        <input type="text" id="postTitle" name="postTitle" value={ title } onChange={ onTitleChanged } />
        
        <label htmlFor="postContent">Post Content: </label>
        <textarea name="postContent" id="postContent" value={ content } onChange={ onContentChanged } />
        <button type="button" onClick={savePostClicked}>Save Post</button>
      </form>
    </section>
  )
}