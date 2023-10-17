import GroupTemplate from '../templates/group';

export default class GroupView {
    constructor() {
        this.groupTemplate = new GroupTemplate();
        this.groupListEl = document.querySelector('.group');
        this.groupTitle = document.getElementsByClassName('group-title__input');
        this.addGroupBtn = document.querySelector('.icon-folder-plus');

        this.deleteContextMenu = document.getElementsByClassName('contextMenu-delete');

        this.formConfirmDelte = document.querySelector('.form-delete');
        this.cofirmButton = document.querySelector('.delete-button');
        this.cancleButton = document.querySelector('.cancle-button');
    }

    renderGroupList = (groups) => {
        groups.forEach((group) => {
            const data = this.groupTemplate.renderGroup(group);
            this.groupListEl.innerHTML += data;
        });
    };

    addGroupView = (addGroup) => {
        this.addGroupBtn.addEventListener('click', (e) => {
            e.preventDefault;
            alert('click success');
            const groupValue = {
                title: 'UntitledGroup',
                lists: [
                    {
                        name: 'UntitledList',
                        tasks: [],
                    },
                ],
            };
            addGroup(groupValue);
        });
    };

    displayGroupList = (group) => {
        const data = this.groupTemplate.renderGroup(group);
        this.groupListEl.innerHTML += data;
    };

    deleteGroupView = (dataId, deleteGroup) => {
        this.cofirmButton.addEventListener("click", (e) => {
            this.showDeleteModal();
            e.preventDefault;
            console.log(this.groupListEl)
            deleteGroup(dataId)
        })
        this.cancleButton.addEventListener("click", (e) => {
            e.preventDefault;
            this.hideDeleteModal();
        })
    }

    handleRightClick = () => {
        let menu = document.querySelector('.contextMenu');
        const inputs = Array.from(this.groupTitle);
        inputs.forEach((input) => {
            input.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                menu.style.display = 'block';
                menu.style.top = e.y + 'px';
                menu.style.left = e.x + 'px';
                const dataId = input.dataset.id;
                console.log(dataId);
                console.log(this.deleteContextMenu);
                this.deleteContextMenu.addEventListener('click', this.deleteGroupView(dataId));
            });
        });
        document.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    };

    showDeleteModal = () => {
        this.formConfirmDelte.classList.remove('hidden');
    };

    hideDeleteModal = () => {
        this.formConfirmDelte.classList.add('hidden');
    };
}
