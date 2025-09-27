1.What is JSX, and why is it used?
Ans:---
JSX, which stands for JavaScript XML, is a syntax extension for JavaScript. It's primarily used in React to describe what the user interface (UI) should look like. Think of it as a way to write HTML-like code directly within your JavaScript files.

Why is JSX Used?
JSX makes building user interfaces more intuitive and efficient. Instead of using methods like document.createElement() to create and append elements, which can be messy and hard to read, JSX lets you use a familiar, declarative syntax. This improves the readability and maintainability of your code.

For example, without JSX, you might write code like this to create a simple heading:

---

2.What is the difference between State and Props?
Ans:---Both State and Props are plain JavaScript objects used to store data that influences what a React component renders. The fundamental difference lies in who owns that data and whether it can be changed by the component

Props (Properties).....
Explained
Props are how you pass data from a parent component to a child component. They are like function arguments.
A child component can only read the props it receives. It cannot modify them. This ensures a predictable, one-way data flow known as "Unidirectional Data Flow."
External: The data is external to the component receiving it.
Usage: You use props to pass down:
Initial values.
Functions (callbacks) that the child can execute to notify the parent of an event.

State Explained....
State is the component's internal memory. It is a source of truth for data that should change over time within the component.
Mutable: A component can change its own state using a dedicated update function (like useState in functional components or this.setState in class components).
Local: The state is private and local to the component it's defined in.
Usage: You use state for things that change based on user interaction or time, such as:
The current value in a form input.
Whether a modal is open or closed.
A counter's value.

---

---

3.What is the useState hook, and how does it work?
Ans:---
The useState hook is a special function in React that allows you to add state—internal, changeable data—to functional components. Before hooks, only class components could have state.
In simple terms, it's the most common way to give a functional component a "memory" to store information that, when updated, will cause the component to re-render.

The useState hook, when called, does two things:
Returns the current state value.
Returns a function to update that value.

Initialization and Destructuring....
You call useState at the top of your functional component, passing the initial value for your state as its only argument.

---

---

4.How can you share state between components in React?
Ans:---
In React, the choice of how to share state between components depends on the size and complexity of the application, as well as the relationship between the components.
Here are the three primary methods for sharing state, ranging from simple and local to complex and global:

. Lifting State Up (The React Way for Closely Related Components)
This is the most fundamental and recommended way to share state between components that have a close parent/child or sibling relationship.

. React Context API (For Global or App-Wide State)
The Context API is a built-in React feature that allows you to pass data deep down the component tree without manually passing props at every level. It helps avoid deep prop drilling.

. External State Management Libraries (For Complex Applications)
For very large, complex applications with intricate data flow, you often use dedicated libraries that provide a structured, centralized store for all your application's state.

---

---

5.How is event handling done in React?
Ans:---
In React, event handling is done by passing a function as a prop to a DOM element, such as a button or an input field. Unlike plain HTML, where event names are in all lowercase (e.g., onclick), React uses camelCase for event names (e.g., onClick).

When a user interacts with a DOM element (e.g., a button click or a form submission), React listens for that event and executes the function you provided. This is how you respond to user actions and update your component's state.

Attaching an Event Handler
You attach an event handler directly to the JSX element using the camelCase attribute.

---

---
