# 📘 Day 19 Journal – JavaScript - Accessibility

## ✅ What I did
Today’s was all about practicing JS Event and learn a bit more about Event bubbling and delegation, which are two cool concepts. 

## Why Accessibility Matters
Before we even touch code, remember: accessibility is not a “bonus feature.” It’s a fundamental requirement of professional web development.

Ethical: Everyone, regardless of ability, should have equal access to information and functionality.

Legal: Many countries enforce accessibility standards (e.g., WCAG, ADA).

Practical: Accessible sites are often more usable for everyone — think captions in a noisy café or keyboard shortcuts for power users.

## JavaScript’s Double-Edged Sword
JavaScript can:

- Enhance accessibility (dynamic updates, custom controls, better interactivity)

- Break accessibility (keyboard traps, inaccessible widgets, missing announcements)

*If you add interactivity, you inherit the responsibility to make it accessible.*

## The Purpose of ARIA in JavaScript
**ARIA (Accessible Rich Internet Applications)** is a set of attributes that give assistive technologies,  like screen readers, extra information about elements, especially when building custom UI components with JavaScript that don’t exist in native HTML.

- Golden Rule (from W3C & MDN):
> If you can use a native HTML element with built-in semantics and behavior, do that instead of adding ARIA. Bad ARIA is worse than no ARIA.

## Core ARIA Concepts
### Roles
Define what an element is supposed to be.

#### Common roles:

| **Role**        | **Description**                                                                 | **Typical Use Case**                          |
|-----------------|----------------------------------------------------------------------------------|-----------------------------------------------|
| `button`        | Represents a clickable element that triggers an action                          | Custom `<div>` or `<span>` styled as a button |
| `dialog`        | Defines a modal window that interrupts the main flow                            | Pop-up modals, confirmation boxes             |
| `tab`           | Identifies a selectable item in a tabbed interface                              | Tab navigation components                     |
| `menuitem`      | Represents an item in a menu                                                     | Dropdown or context menus                     |
| `progressbar`   | Indicates progress toward a goal or task completion                             | File upload progress, loading indicators      |
| `tooltip`       | Provides additional information on hover or focus                               | Hover hints, help bubbles                     |
| `alert`         | Displays urgent messages that require immediate attention                       | Error messages, warnings                      |
| `status`        | Communicates non-critical status updates                                         | Background sync status, connection updates    |

```js
element.setAttribute("role", "button");
```

### States
Describe the current condition of an element.

#### Why States Matters?
Native elements (e.g., \<input>, \<button>) have built-in accessibility.
Custom controls need ARIA attributes to communicate state changes to assistive tech.
Examples:
#### Key ARIA States and Their Use Cases


| ARIA State       | Purpose                                                              | Example Use Case                             |
|------------------|----------------------------------------------------------------------|----------------------------------------------|
| `aria-selected`  | Indicates which item is selected                                     | Tabs, listboxes, grids                       |
| `aria-disabled`  | Signals an element is disabled only to people using assistive technologies, such as screen readers| Custom buttons or form controls              |
| `aria-haspopup`  | Indicates that an element triggers a popup (Only use this attribute when `role = menu, dialog, listbox, tree, or grid` or it is `true` which defaults to the `role = 'menu'`)      | Dropdown menus, file editors                 |
| `aria-required`  | Marks a field as required before form submission                     | Custom form inputs                           |
| `aria-checked`   | Reflects the checked state of an element                             | Custom checkboxes, radio buttons, switches   |
| `aria-hidden`   | Hides content from assistive tech                          | Decorative elements   |

```js
// aria-selected for tab interfaces
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
  <button role="tab" aria-selected="false">Tab 3</button>
</div>;

```

##### Best Practices
- Avoid redundancy (e.g., don’t use `aria-required` if the label already says `“required”`).

- Use roles (role="tab", role="menuitem") to define the nature of custom elements.

- Ensure keyboard accessibility alongside ARIA attributes.


### Properties
Provide extra metadata about an element.

Examples:
`aria-control="menuList"` establish a programmatic connection between the controlling element (e.g \<button>) and the element it controls ("menuList").
`aria-label="Close menu"` gives a name to an unlabeled control
`aria-labelledby`: References an element that labels the current one
`aria-describedby="errorMsg"` links to helper/error text
`aria-valuemin, aria-valuemax, aria-valuenow` for sliders/progress bars
`aria-live='assertive'` creates a live region on your page which can be used to notify screen reader users of dynamic content changes in the live region as they occur.
 - Uses:
    - Messages that are displayed after an action has been taken (such as an error message or confirmation)
    - Content that updates periodically (such as a ticker, marquee, or countdown timer)
    - General status messages (such as updates about a process).
- Values:
    - `'assertive'` Announces changes immediately, interrupting other speech if necessary (highest priority)
    - `'polite'` Announces updates after the current task is finished (lowest priority)
    - `'off'` value: No announcement of changes
 - the `aria-live` attribute **is not required** if the updated information is contained in an element with an ARIA role of `alert`, `log`, `marquee`, `status`, or `timer`, as these roles already have default aria-live values

```js
 <div aria-live="assertive">
  <p>Your session will expire in 30 seconds.</p>
</div>
```
## Building Accessible Custom Components
### Dropdown Example
To build a custom dropdown:

Use `role="listbox"` and `role="option"`

Manage `aria-expanded`, `aria-selected`, and `aria-activedescendant`

Ensure keyboard support: Arrow keys, Enter, Escape

Announce changes with `aria-live` or `aria-label`

### Modal Example
Accessible modals should:

Use `role="dialog"` or `role="alertdialog"`

Trap focus inside modal

Provide `aria-labelledby` or `aria-label`

Include a visible close button

Return focus to trigger element on close



## Common ARIA Mistakes
- Adding ARIA where HTML already does the job (e.g., role="button" on a \<button>).

- Forgetting to update ARIA states when the UI changes.

- Using ARIA without matching keyboard behavior.

- Overloading elements with too many ARIA attributes (“ARIA soup”).
