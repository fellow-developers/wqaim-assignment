import './App.css';
import { Header } from './components/header/Header';
import { Post } from './components/post/Post';

// dummy post data
const getPostsData = (n) => {
  // creating fake post data
  const posts = [];
  for (let i = 1; i <= n; i++) {
    posts.push({ id: i, title: `Post ${i}` })
  }

  return posts;
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="post-container">
        {getPostsData(6).map((post) => (
          <Post key={post.id} id={post.id} title={post.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
