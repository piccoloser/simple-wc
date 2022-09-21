# Usage

### script.js
```JavaScript
class ExampleComponent extends BaseComponent {
    constructor() {
        super();

        // Create a paragraph element.
        this.add("p", { innerHTML: this.innerHTML });

        // Create and store a list element.
        const list = this.add("ul");

        // Values that don't exist in the HTML
        // declaration will return "undefined."
        [this.one, this.two, this.three].forEach(key => {
            this.add("li", { innerHTML: key }, list);
        })
    }
}

// Define the custom tag for use in your HTML.
customElements.define("example-component", ExampleComponent);
```

### index.html
```HTML
<example-component one="1" two="two">
    My Component.
</example-component>
```

## Output

My Component
* 1
* 2
* undefined
---

# `BaseComponent` Methods
### `add(tagName: string, properties: Object, parent: HTMLElement) -> HTMLElement`

This method creates a new `HTMLElement` and adds it to the current component. The method also returns the created object so that it can be referenced as a parent for future elements.

# Tips
Elements can be styled with embedded CSS as they are added to the component, as seen in the example below:

```JavaScript
// ...

this.add("p", {
    innerHTML: this.innerHTML,
    style: `
        font-weight: bold;
        color: #f00;
        font-family: Georgia, serif;
    `,
});

// ...
```

## Output

<p style="font-weight: bold;color: #f00; font-family: Georgia, serif;">
My Component
</p>

* 1
* 2
* undefined