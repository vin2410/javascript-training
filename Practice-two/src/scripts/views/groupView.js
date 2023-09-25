import Template from '../templates/templates';

class GroupView {
    constructor() {
        this.groupListEl = document.querySelector('.left-column__group');
    }

    renderGroupList = (groups) => {
        this.groupListEl.innerHTML = '';
        groups.forEach((group) => {
            this.renderGroup(group);
        });
    };

    renderGroup = (group) => {
        const groupTemplate = Template.renderGroup(group);
        this.groupListEl.innerHTML += groupTemplate;
    };
}
export default GroupView;
