import { items } from './items.js';
import { languages } from './languages.js';
import { categories } from './categories.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsList = document.getElementById('resultsList');
const languageSelect = document.getElementById('languageSelect');
const typeSelect = document.getElementById('typeSelect');
const categorySelect = document.getElementById('categorySelect');

// Populate filter options
languages.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = lang;
    languageSelect.appendChild(option);
});

categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
});

function filterItems() {
    const query = searchInput.value.toLowerCase();
    const selectedLanguage = languageSelect.value;
    const selectedType = typeSelect.value;
    const selectedCategory = categorySelect.value;

    const filteredItems = items.filter(item => {
        const matchesQuery = query === '' || item.title.toLowerCase().includes(query) || 
                             item.author.toLowerCase().includes(query) || 
                             item.description.toLowerCase().includes(query);
        const matchesLanguage = selectedLanguage === '' || item.language === selectedLanguage;
        const matchesType = selectedType === '' || item.type === selectedType;
        const matchesCategory = selectedCategory === '' || item.category === selectedCategory;
        
        return matchesQuery && matchesLanguage && matchesType && matchesCategory;
    });

    displayResults(filteredItems);
}

function displayResults(items) {
    resultsList.innerHTML = '';
    items.forEach(item => {
        const listItem = document.createElement('li');
        
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;
        image.style.width = '100px';  // Adjust as needed

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const category = document.createElement('p');
        category.textContent = `Category: ${item.category}`;

        const type = document.createElement('p');
        type.textContent = `Type: ${item.type}`;

        const author = document.createElement('p');
        author.textContent = `Author: ${item.author}`;

        const url = document.createElement('a');
        url.href = item.url;
        url.textContent = 'Learn here';
        url.target = '_blank';

        listItem.appendChild(image);
        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(category);
        listItem.appendChild(type);
        listItem.appendChild(author);
        listItem.appendChild(url);
        
        resultsList.appendChild(listItem);
    });
}

searchButton.addEventListener('click', filterItems);
