import Template from '../templates/templates';
export default class View {
    constructor() {
        this.groupListEl = document.querySelector('.group');
    }

    renderGroupList = (groups) => {
        groups.forEach((group) => {
            const groupTemplate = Template.renderGroup(group);
            this.groupListEl.innerHTML += groupTemplate;
        });
    };
}
