import BlogCard from './BlogCard';

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <BlogCard
        title='First Post'
        content='This is the first post in My Web App!'
      />
      <BlogCard
        title='Second Post'
        content='This is the second post in My Web App!'
      />
    </>
  );
};

export default HomePage;
