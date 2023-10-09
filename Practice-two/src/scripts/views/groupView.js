import GroupTemplate from '../templates/group';

export default class GroupView {
    constructor() {
        this.groupTemplate = new GroupTemplate();
        this.groupListEl = document.querySelector('.group');
        this.addGroupBtn = document.querySelector('.icon-folder-plus');
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
                title: '',
                lists: [
                    {
                        name: '',
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
}
