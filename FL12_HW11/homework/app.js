const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
function folderListCreation(obj, element) {
  let item = document.createElement('ul');
  for (let key of obj) {
    let text_content = document.createElement('div');
    let icon = document.createElement('icon');
    icon.classList.add('material-icons');
    let new_element = document.createElement('li');
    new_element.appendChild(text_content);
    item.appendChild(new_element);
    let special = document.createElement('span');
    text_content.appendChild(icon);
    special.innerHTML = key.title;
    text_content.appendChild(special);
    if (key.folder === true) {
      icon.innerText = 'folder';
      text_content.classList.toggle('folder');
      text_content.addEventListener('click', () => {
        if (icon.innerText === 'folder'){
          icon.innerText = 'folder_open';
          new_element.querySelector('.closed').classList.toggle('open');
        } else {
            icon.innerText ='folder';
            new_element.querySelector('.closed').classList.toggle('open');
        }
      });
      if (key.children) {
        folderListCreation(key.children, new_element);
      } else {
        let eFolder = document.createElement('div');

        new_element.appendChild(eFolder);
        eFolder.innerText = 'Folder is empty';
        eFolder.classList.add('empty_folder', 'closed');
      }
    }
  }
  element.appendChild(item);

  if (item.parentNode !== rootNode) {
    item.classList.toggle('closed');
  }
}

folderListCreation(structure, rootNode);