
const rootNode = document.getElementById('root');

let hashAdd = '#/add';

function mainPage(Sets) {

    let add_button = document.querySelector('.add_b');

    add_button.addEventListener('click', () => {

        rootNode.querySelector('.addSet').classList.toggle('hidden');
        rootNode.querySelector('.Main').classList.toggle('hidden');

        mainPage([]);

        location.href = location.href + hashAdd;
    });

    let button_term = document.querySelector('.terms');

    button_term.addEventListener('click', () => {

        event.stopPropagation();

        let remove_button = document.createElement('button');
        remove_button.innerHTML = 'Remove';
        remove_button.classList.add('remove_button');

        let enter_definition = document.createElement('input');
        enter_definition.setAttribute('placeholder', 'Enter definition');

        let new_set = document.createElement('fieldset');
        new_set.classList.add('term');

        let enter_term = document.createElement('input');
        enter_term.setAttribute('placeholder', 'Enter term');
        enter_term.classList.add('enter_term');
        enter_term.classList.add('enter_definition');

        new_set.appendChild(enter_term);
        new_set.appendChild(enter_definition);
        new_set.appendChild(remove_button);
        button_term.parentNode.appendChild(new_set);

        remove_button.addEventListener('click', () => {

            event.stopPropagation();

            remove_button.parentNode.parentNode.removeChild(remove_button.parentNode);

        });
    });

    let save_button = document.querySelector('.save_button');

    save_button.addEventListener('click', () => {

        let name = document.querySelector('.setName').value;
        if (name) {
            let updatedSets = JSON.parse(localStorage.getItem('newSets'));
            let newSet = new Set(name, updatedSets.length);

            for (let childNode of save_button.parentNode.querySelectorAll('.term')) {

                const definition = childNode.querySelector('.enter_definition').value;
                const term = childNode.querySelector('.enter_term').value;

                if (definition || term) {

                    newSet.terms.push({term: term, definition: definition});
                }
            }
            updatedSets.push(newSet);

            localStorage.setItem('newSets', JSON.stringify(updatedSets));

            rootNode.querySelector('.Main').classList.toggle('hidden');
            rootNode.querySelector('.addSet').classList.toggle('hidden');

            location.href = location.href.replace(location.hash, '');
        } else {
            alert('Your set has no name.Please, give it to it!');
        }
    });

    const cancel_button = document.querySelector('.cancel_button');
    cancel_button.addEventListener('click', () => {
        location.href = location.href.replace(location.hash, '');
    });

    for (let set of Sets) {
        set_creation(set);
    }
}

function set(nameValue, id) {
    this.isStudied = false;
    this.name = nameValue;
    this.terms = [];
    this.id = id;
}

function set_creation(set) {

    let legend = document.createElement('legend');
    legend.innerHTML = set.isStudied ? 'Done' : 'To be studied';

    let name = document.createElement('p');
    name.innerHTML = set.name;

    let remove_button = document.createElement('button');
    remove_button.classList.add('remove_button');
    remove_button.innerHTML = 'Remove';

    let new_set = document.createElement('fieldset');
    new_set.setAttribute('id', set.id);

    let edit_button = document.createElement('button');
    edit_button.innerHTML = 'Edit';
    edit_button.classList.add('edit_button');

    new_set.appendChild(legend);
    new_set.appendChild(name);
    new_set.appendChild(edit_button);
    new_set.appendChild(remove_button);

    rootNode.appendChild(new_set);

    new_set.addEventListener('click', function(event) {

        event.stopPropagation();
        studied_set(new_set);
    });

    remove_button.addEventListener('click', function(event) {
        event.stopPropagation();
        let legend = remove_button.parentNode.querySelector('legend');

        let setName = legend.innerHTML === 'To be studied' ? 'newSets' : 'studiedSets';
        let Sets = JSON.parse(localStorage.getItem(setName));

        for (let k = 0; k < Sets.length; k++) {

            if (Sets[k].id === Number(remove_button.parentNode.id)) {

                Sets.splice(k, 1);
            }
        }

        localStorage.setItem(setName, JSON.stringify(Sets));
        location.href = location.href.replace(location.hash, '');
    });
}

function studied_set(node) {
    let legend = node.querySelector('legend');
    let newSets;
    let studiedSets;

    if ('To be studied'=== legend.innerHTML ) {

        studiedSets = JSON.parse(localStorage.getItem('studiedSets'));
        newSets = JSON.parse(localStorage.getItem('newSets'));

        for (let k = 0; k < newSets.length; k++) {

            if (newSets[k].id === Number(node.id)) {

                newSets[k].isStudied = true;

                studiedSets.unshift(newSets[k]);
                newSets.splice(k, 1);
            }
        }

        localStorage.setItem('newSets', JSON.stringify(newSets));

        localStorage.setItem('studiedSets', JSON.stringify(studiedSets));
    }

    location.href = location.href.replace(location.hash, '');
}

function page_main() {
    if (localStorage.getItem('studiedSets') === false) {

        localStorage.setItem('studiedSets', JSON.stringify([]));
    }

    if (localStorage.getItem('newSets') === false) {

        localStorage.setItem('newSets', JSON.stringify([]));
    }


    let Sets = JSON.parse(localStorage.getItem('newSets')).concat(JSON.parse(localStorage.getItem('studiedSets')));

    mainPage(Sets);
}


page_main();