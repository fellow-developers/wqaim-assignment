// dummy post data
const getPostsData = (n) => {
    // creating fake post data
    const posts = [];
    for (let i = 1; i <= n; i++) {
        posts.push({
            id: i,
            title: `Post ${i}`,
            body: `Post ${i} Body` + "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        })
    }
    return posts;
}

export const dummyPosts = getPostsData(6);

export const getPostDetail = (id) => dummyPosts.filter((post) => post.id === parseInt(id));
