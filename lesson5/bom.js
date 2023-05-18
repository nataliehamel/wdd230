const input = document.getElementById('favChap');
const button = document.getElementById('btn');
const list = document.getElementById('list');

button.addEventListener('click', function () {
    const chapterText = input.value.trim();

    if (chapterText !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.textContent = chapterText;
        
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', function () {
            chapterList.removeChild(li);
          });

          li.appendChild(deleteBtn);
          chapterList.appendChild(li);

          input.value = '';
          input.focus();
    }
});