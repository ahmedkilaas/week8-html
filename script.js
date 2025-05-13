// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        excerpt: "Learn the basics of HTML, CSS, and JavaScript to start your journey as a web developer.",
        date: "May 10, 2023",
        author: "John Smith",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        title: "The Art of Minimalist Design",
        excerpt: "Discover how less can be more when it comes to creating beautiful and functional designs.",
        date: "April 28, 2023",
        author: "Sarah Johnson",
        image: "https://media.istockphoto.com/id/1499955430/photo/contemporary-classic-white-beige-interior-with-furniture-and-decor-empty-wall-mockup-3d.jpg?b=1&s=612x612&w=0&k=20&c=p6bhMg-rzsvcvUYlXWlEx7bWLSxA49ORK5zkvW87qos="
    },
    {
        id: 3,
        title: "Healthy Eating Habits for Busy People",
        excerpt: "Simple tips to maintain a healthy diet even with a hectic schedule.",
        date: "April 15, 2023",
        author: "Mike Chen",
        image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        title: "Travel Photography Tips",
        excerpt: "Capture your adventures with these professional photography techniques.",
        date: "March 30, 2023",
        author: "Emma Wilson",
        image: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 5,
        title: "Mindfulness Meditation Guide",
        excerpt: "Reduce stress and improve focus with these simple meditation exercises.",
        date: "March 18, 2023",
        author: "David Brown",
        image: "https://images.pexels.com/photos/5837149/pexels-photo-5837149.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

// DOM Elements
const postsContainer = document.getElementById('posts-container');
const themeToggle = document.getElementById('theme-toggle');
const newsletterForm = document.getElementById('newsletter-form');

// Load blog posts
function loadPosts() {
    postsContainer.innerHTML = blogPosts.map(post => `
        <article class="post-card">
            <img src="${post.image}" alt="${post.title}">
            <div class="post-card-content">
                <h3>${post.title}</h3>
                <p class="post-meta">Posted on ${post.date} by ${post.author}</p>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        </article>
    `).join('');
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change icon based on mode
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Newsletter form submission
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input');
    const email = emailInput.value;
    
    // Simple validation
    if (email.includes('@') && email.includes('.')) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});