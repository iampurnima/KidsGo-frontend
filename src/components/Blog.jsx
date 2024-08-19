import React from "react";
import './css/Blog.css';

const blogPosts = [
    {
        id: 1,
        title: "How to Buy Second-Hand Kids' Items Safely",
        excerpt: "Buying second-hand can be a great way to save money, but safety is key. Learn tips and tricks for ensuring the items you buy are safe for your little ones.",
        image: "https://example.com/safe-buying.jpg",
        link: "/blog/safe-buying"
    },
    {
        id: 2,
        title: "Top 10 Eco-Friendly Benefits of Second-Hand Shopping",
        excerpt: "Discover the environmental impact of buying second-hand and how it contributes to a more sustainable future.",
        image: "https://example.com/eco-friendly.jpg",
        link: "/blog/eco-friendly-benefits"
    },
    {
        id: 3,
        title: "Organizing a Kids' Room on a Budget",
        excerpt: "Transform your child's room without breaking the bank. Here are budget-friendly ideas for creating a fun and functional space.",
        image: "https://example.com/kids-room.jpg",
        link: "/blog/kids-room-budget"
    }
    // Add more blog posts as needed
];

function Blog() {
    return (
        <div className="blogContainer">
            <div className="blogPosts">
                {blogPosts.map(post => (
                    <div key={post.id} className="blogPost">
                        <img src={post.image} alt={post.title} className="blogImage" />
                        <div className="blogContent">
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <a href={post.link} className="readMore">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
            <aside className="blogSidebar">
                <h3>Categories</h3>
                <ul>
                    <li><a href="/blog/category/shopping-tips">Shopping Tips</a></li>
                    <li><a href="/blog/category/sustainability">Sustainability</a></li>
                    <li><a href="/blog/category/parenting">Parenting</a></li>
                    <li><a href="/blog/category/kids-fashion">Kids' Fashion</a></li>
                </ul>
                <h3>Recent Posts</h3>
                <ul>
                    <li><a href="/blog/safe-buying">How to Buy Second-Hand Kids' Items Safely</a></li>
                    <li><a href="/blog/eco-friendly-benefits">Top 10 Eco-Friendly Benefits of Second-Hand Shopping</a></li>
                    <li><a href="/blog/kids-room-budget">Organizing a Kids' Room on a Budget</a></li>
                </ul>
            </aside>
        </div>
    );
}

export default Blog;
