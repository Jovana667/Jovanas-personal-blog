document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blogPosts');
    
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2 style="border-bottom: 1px solid black; width: 100%; display: inline-block;"><strong>${post.title}</strong></h2>
            <p><i>${post.content}</i></p>
            <p>Posted by: ${post.username}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});