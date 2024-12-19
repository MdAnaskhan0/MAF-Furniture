import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/img-grid-1.jpg';
import Image2 from '../assets/images/img-grid-2.jpg';
import Image3 from '../assets/images/img-grid-3.jpg';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Furniture Trends for 2024',
    description: 'Explore the latest trends in furniture design to transform your living space with style and functionality.',
    image: Image1,
    date: 'December 15, 2024',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Sofa for Your Home',
    description: 'A step-by-step guide to selecting the perfect sofa that complements your home and lifestyle.',
    image: Image2,
    date: 'November 30, 2024',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'Benefits of Custom-Made Furniture',
    description: 'Discover why custom furniture is a great choice for personalizing your home décor.',
    image: Image3,
    date: 'November 20, 2024',
    author: 'Emily Johnson',
  },
];

const Blog = () => {
  return (
    <div className="bg-[#EFF2F1] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h2>
          <p className="text-gray-600 text-lg">Stay updated with the latest news, trends, and tips in furniture design.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover max-h-content"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{blog.description}</p>
                <div className="text-gray-400 text-xs mb-2">
                  <p>By {blog.author} • {blog.date}</p>
                </div>
                <Link to={`/`} className="text-[#3B5D50] font-semibold hover:text-green-700"
                >
                  Read More...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
