const searchBox = document.getElementById('search-box');
const results = document.getElementById('results');

searchBox.addEventListener('keyup', function() {
  const searchTerm = this.value.toLowerCase();
  const articles = [
    { title: "Introduction", url: "https://www.example.com/article1" },
    { title: "Overview", url: "https://www.example.com/article2" },
    { title: "Supported Libraries", url: "https://www.example.com/article2" },
    { title: "Features", url: "https://www.example.com/article2" },
    { title: "Audience", url: "https://www.example.com/article2" },
    { title: "Getting Started", url: "https://www.example.com/article2" },
    { title: "Prerequisites", url: "https://www.example.com/article2" },
    { title: "Site Navigation", url: "https://www.example.com/article2" },
    { title: "Installation", url: "https://www.example.com/article2" },
    { title: "Snippets", url: "https://www.example.com/article2" },
    { title: "Introduction to Snippets", url: "https://www.example.com/article2" },
    { title: "How to use Snippets", url: "https://www.example.com/article2" },
    { title: "Snippets Examples", url: "https://www.example.com/article2" },
    { title: "Templates", url: "https://www.example.com/article2" },
    { title: "Templates Overview", url: "https://www.example.com/article2" },
    { title: "How to apply templates", url: "https://www.example.com/article2" },
    { title: "Template Gallery", url: "https://www.example.com/article2" },
    { title: "Examples", url: "https://www.example.com/article2" },
    { title: "Project Examples", url: "https://www.example.com/article2" },
    { title: "Code Sanboxes", url: "https://www.example.com/article2" },
    { title: "Tutorials", url: "https://www.example.com/article2" },
    { title: "Beginner Tutorials", url: "https://www.example.com/article2" },
    { title: "Advanced Tutorials", url: "https://www.example.com/article2" },
    { title: "Reference", url: "https://www.example.com/article2" },
    { title: "Components Library", url: "https://www.example.com/article2" },
    { title: "Utilities", url: "https://www.example.com/article2" },
    { title: "FAQ", url: "https://www.example.com/article2" },
    { title: "Common Questions", url: "https://www.example.com/article2" },
    { title: "Troubleshooting", url: "https://www.example.com/article2" },
    { title: "Acknowledgements", url: "https://www.example.com/article2" },
    { title: "Contributers", url: "https://www.example.com/article2" },
    { title: "Special Thanks", url: "https://www.example.com/article2" },
  ];
  

  let filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm));

  if (searchTerm.length > 0) {
    results.innerHTML = '';

    if (filteredArticles.length > 0) {
      const list = document.createElement('ul');
      results.appendChild(list);
      results.style.display = 'block';

      filteredArticles.forEach(article => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = article.title;
        listItem.appendChild(link);
        list.appendChild(listItem);
      });
    } else {
      results.textContent = 'No articles found.';
      results.style.display = 'block';
    }
  } else {
    results.style.display = 'none';
  }
});
