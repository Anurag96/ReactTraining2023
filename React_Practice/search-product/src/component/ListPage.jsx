import React from 'react'
import Post from './Post'

function ListPage({searchResults}) {
    const results = searchResults.map((post) => <Post post={post}/>)
    const content = results?.length ? results : <article><p>No Matching Posts</p></article>
  return (
    <div>
        {content}
    </div>
  )
}

export default ListPage