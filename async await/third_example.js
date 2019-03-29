async function fetchPostById(postId) {
    const token  = (await fetch('token_url')).json().token,
          post   = (await fetch(`/posts/${postId}?token=${token}`)).json(),
          author = (await fetch(`/users/${post.authorId}`)).json();

    post.author = author;
    return  post;
}

fetchPostById('gzIrzeo64')
    .then(post=>console.info(post))
    .catch(err=>console.error(err));
