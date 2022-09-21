class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.wrapper = document.createElement("span");

        // Bring HTML attributes into `this` scope.
        Object.keys(this.attributes).forEach(index => {
            this[this.attributes[index]["name"]] =
                this.attributes[index]["value"];
        });
    }

    /**
     * @param {String} tagName `HTMLElement` to be created
     * @param {Object?} properties Properties of the new element
     * @param {HTMLElement?} parent Parent of the new element
     * @returns `HTMLElement`
     */
    add(tagName, properties, parent) {
        let element = document.createElement(tagName);
        if (properties)
            Object.keys(properties).forEach(key => {
                element[key] = properties[key];
            });

        return (parent ? parent : this.wrapper).appendChild(element);
    }

    connectedCallback() { this.shadowRoot.append(this.wrapper); }
}
