document.addEventListener('DOMContentLoaded', () => {
    const listViewBtn = document.getElementById('list-view-toggle');
    const cardViewBtn = document.getElementById('card-view-toggle');
    const listView = document.getElementById('list-view');
    const cardView = document.getElementById('card-view');
  
    // Event listener for list view button
    listViewBtn.addEventListener('click', () => {
      listView.style.display = 'block';
      cardView.style.display = 'none';
    });
  
    // Event listener for card view button
    cardViewBtn.addEventListener('click', () => {
      listView.style.display = 'none';
      cardView.style.display = 'block';
    });
  });
  
  // Fetch the business data from data.json
  fetch('json/data.json')
    .then(response => response.json())
    .then(data => {
      const companies = data.companies;
  
      // Populate list view
      const listView = document.getElementById('list-view');
      companies.forEach(company => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
          <h2>${company.name}</h2>
          <p>Address: ${company.address}</p>
          <p>Phone: ${company.phonenumber}</p>
        `;
        listView.appendChild(listItem);
      });
  
      // Populate card view
      const cardView = document.getElementById('card-view');
      companies.forEach(company => {
        const cardItem = document.createElement('div');
        cardItem.classList.add('card-item');
        cardItem.innerHTML = `
          <h2>${company.name}</h2>
          <p>Address: ${company.address}</p>
          <p>Phone: ${company.phonenumber}</p>
          <p>Membership: ${company.membership}</p>
          <img src="${company.image}" alt="${company.name}">
        `;
        cardView.appendChild(cardItem);
      });
  });