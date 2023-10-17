export default class GroupTemplate {
    constructor() {}

    renderGroup = (group) =>
        `
        <li>
            <div class="group-title">
                <span class="icon icon-list"></span>
                <input class="group-title__input" type="text" readonly value=${group.title} data-id = ${group.id}/>
            </div>
            <div class="group-list">
                <span class="icon icon-menu"></span>
                <input type="text" readonly value=${group.lists[0].name} />
            </div>
        </li>
    `;
}
