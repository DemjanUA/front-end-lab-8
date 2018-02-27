var rootNode = document.getElementById("root");
let container = document.createElement('ul');

function createIcon(name) {
    let icon = document.createElement('i');
    icon.className = 'material-icons';
    icon.innerHTML = name;

    return icon;
}

function appendChildren(...children) {
    children.forEach(e => this.appendChild(e));
}

function Folder(data) {
    let openFolderIcon = createIcon('folder');
    let closeFolderIcon = createIcon('folder_open');

    let folderTitle = document.createElement('span');
    folderTitle.innerHTML = data.title;
    
    appendChildren.call(folderTitle, openFolderIcon, closeFolderIcon);

    let view = document.createElement('li');
    view.className = 'folder close';
    let inner = document.createElement('ul');
    if (!data.children) {
        inner.className = 'empty';
        let item = document.createElement('li');
        let itemTitle = document.createElement('i');
        itemTitle.innerHTML = 'Folder is empty';
        item.appendChild(itemTitle);
        inner.appendChild(item);
    }

    appendChildren.call(view, folderTitle, inner)

    this.inner = inner;
    this.view = view;

    return this;
}

function File(data) {
    let fileIcon = createIcon('insert_drive_file');

    let fileTitle = document.createElement('span');
    fileTitle.innerHTML = data.title;
    fileTitle.appendChild(fileIcon);

    let view = document.createElement('li');
    view.className = 'file';

    view.appendChild(fileTitle);

    this.view = view;
    return this;
}

function traverse(node, parent) {
    node.forEach(e => {
        let element = (e.folder) ? new Folder(e) : new File(e);
        if (e.children) {
            traverse(e.children, element.inner);
        }
        parent.appendChild(element.view);
    });
    return 0;
}

traverse(structure, container);

rootNode.addEventListener('click', e => {
    let target = e.target;
    let folder = target.closest('.folder');
    if (folder && !target.closest('.file') && !target.closest('.empty')) {
        folder.classList.toggle('close');
    }
});

rootNode.appendChild(container);