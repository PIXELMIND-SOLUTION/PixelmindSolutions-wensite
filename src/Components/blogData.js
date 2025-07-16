// blogData.js
const blogPosts = [
    {
        id: 1,
        name: "empowering-businesses-through-it-services",
        title: "PixelMind Solutions: Empowering Businesses Through Innovative IT Services",
        date: "2025-07-01",
        author: "Admin"
    },
    {
        id: 2,
        name: "driving-innovation-through-smart-it",
        title: "PixelMind Solutions: Driving Innovation Through Smart IT Services",
        date: "2025-07-02",
        author: "Admin"
    },
    {
        id: 3,
        name: "shaping-digital-transformation-future",
        title: "How PixelMind Solutions is Shaping the Future of Digital Transformation",
        date: "2025-07-03",
        author: "Admin"
    }
];

export function getAllBlogPosts() {
    return blogPosts;
}

export function getBlogPostByname(name) {
    return blogPosts.find((post) => post.name === name);
}
