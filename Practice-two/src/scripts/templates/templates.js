class Template {
    constructor() {}

    static renderGroup = (group) =>
        `
            <li>
                <div class="group-item">
                    <span class="icon icon-list"></span>
                    <input type="text" class="group" readonly value=${group.title}/>
                </div>
                <div class="group-item__list">
                    <span class="icon icon-menu"></span>
                    <input type="text" class="list" readonly value=${group.list.name} />
                </div>
            </li>
        `;
}

export default Template;
