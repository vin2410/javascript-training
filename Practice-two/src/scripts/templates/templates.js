export default class Template {
    constructor() {}

    static renderGroup = (group) =>
        `
            <li>
                <div class="group-item__title">
                    <span class="icon icon-list"></span>
                    <input type="text" readonly value=${group.title}/>
                </div>
                <div class="group-item__list">
                    <span class="icon icon-menu"></span>
                    <input type="text" readonly value=${group.lists.name} />
                </div>
            </li>
        `;
}
