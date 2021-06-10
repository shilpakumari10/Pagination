import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(10);
  console.log({ currentPage });
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfFirstPost = currentPage * postsPerPage;
  const indexOfLastPost = indexOfFirstPost + postsPerPage;
  console.log({ indexOfFirstPost, indexOfLastPost });
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log({ currentPosts });
  // Change page

  const paginate = paeNumber => {
    console.log(paeNumber);
    setCurrentPage(paeNumber.selected);
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

export default App;
