import {BlogCard} from './BlogCard'; 


const blogData = [
  {
    id: 1,
    title: 'Critical Analysis of Net Art',
    summary: 'Exploring the idea of nostalgia, loss and the effects of rapidly developing technologies on digital artifacts.',
    blogLink: '/blog/myessay',
  },
  {
    id: 2,
    title: '',
    summary: '',
    blogLink: "",
  },
  {
    id: 3,
    title: '',
    summary: '',
    blogLink: "",
  },

];
export const Blog =() =>{
    return (
      <div className="blog-container">
        {blogData.map((blogPost) => (
          <BlogCard
            key={blogPost.id}
            title={blogPost.title}
            summary={blogPost.summary}
            blogLink={blogPost.blogLink}
          />
        ))}
      </div>
    );
  };
  