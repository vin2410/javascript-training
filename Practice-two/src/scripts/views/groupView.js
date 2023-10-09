import Template from '../templates/template';

export default class GroupView {
    constructor() {
        this.template = new Template();
        this.groupListEl = document.querySelector('.group');
        this.groupItem = document.querySelector('.group-item');
        this.addGroupBtn = document.querySelector('.icon-folder-plus');
    }

    renderGroupList = (groups) => {
        groups.forEach((group) => {
            const data = this.template.groupTemplate.renderGroup(group);
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
        const data = this.template.groupTemplate.renderGroup(group);
        this.groupListEl.innerHTML += data;
    };

    renameGroup = (group) => {};
}
