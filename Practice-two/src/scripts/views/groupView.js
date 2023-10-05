import Template from '../templates/templates';

export default class GroupView {
    constructor() {
        this.groupListEl = document.querySelector('.group');
        this.addGroupBtn = document.querySelector('.icon-folder-plus');
    }

    renderGroupList = (groups) => {
        groups.forEach((group) => {
            const groupTemplate = Template.renderGroup(group);
            this.groupListEl.innerHTML += groupTemplate;
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
        const groupTemplate = Template.renderGroup(group);
        this.groupListEl.innerHTML += groupTemplate;
    };
}
