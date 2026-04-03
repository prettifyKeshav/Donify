import React from 'react'
import "@/uploads/styles/blogs/blogs.css"
import BlogsCard from '../../molecules/BlogsCard'

const BlogsPage = () => {

    const cards = [
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/1.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        ,
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/2.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/3.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/1.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/2.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/3.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        }
    ]

    return (
        <>
            <section>
                <div className="blogs-banner">
                    <h1>Blogs</h1>
                    <p>Find fundraisers by NGO’s name, location, title, or keyword</p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="blog-listing-grid">
                        {
                            cards.map(( item, index) => {
                                return (
                                    <BlogsCard key={index} {...item}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsPage