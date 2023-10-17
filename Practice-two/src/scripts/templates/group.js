export default class GroupTemplate {
    constructor() {}

    renderGroup = (group) =>
        `
        <li>
<<<<<<< HEAD
            <div class="group-item__title">
                <span class="icon icon-list"></span>
                <input type="text" readonly value=${group.title}/>
            </div>
            <div class="group-item__list">
                <span class="icon icon-menu"></span>
                <input type="text" readonly value=${group.lists.name} />
=======
            <div class="group-title">
                <span class="icon icon-list"></span>
                <input class="group-title__input" type="text" readonly value=${group.title} data-id = ${group.id}/>
            </div>
            <div class="group-list">
                <span class="icon icon-menu"></span>
                <input type="text" readonly value=${group.lists[0].name} />
>>>>>>> demo
            </div>
        </li>
    `;
}
