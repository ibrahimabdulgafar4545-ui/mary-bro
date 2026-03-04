1. What React Actually Is

React is a JavaScript library for building user interfaces, not just a framework.
It’s component-based, declarative, and focused on state-driven UI.


2. Components (The Core of Everything)

Talk about:

Functional components (this is modern React)

Why components exist (reusability, separation of concerns)

Example concept (not code-heavy):

A Navbar is a component

A Button is a component

A Page is a component made of components

If you don’t understand components, stop and fix that first.

3. JSX (JavaScript + HTML)

JSX looks like HTML but it’s JavaScript under the hood.

Key talking points:

JSX must return one parent element

You can embed JavaScript using {}

Truth bomb: JSX is not HTML. It’s syntax sugar.

4. Props (Passing Data)

Props are how components talk to each other.

Talk about:

Props are read-only

Used to pass data from parent → child

Example idea:

Pass a username to a Profile component

Pass a title to a Card component

If you try to modify props, you’re doing it wrong.

5. State (Dynamic Data)

State is data that changes over time.

Key points:

useState hook

When state changes, React re-renders

Explain with:

Counter

Toggle

Form input

Opinionated truth:
If your UI changes but you’re not using state, you’re hacking.

6. Event Handling

React handles events differently than vanilla JS.

Things to mention:

onClick, onChange, onSubmit

Functions, not strings

No onclick="..."

If you’re still writing inline HTML events, unlearn that fast.

7. Conditional Rendering

Showing things based on conditions.

Talk about:

&&

Ternary operators

Showing loaders, errors, empty states

Example:

Show “Loading…” when data isn’t ready

Show “Welcome” only if logged in

This is real-world React.

8. Lists & Keys

Rendering arrays using map.

Important points:

Every list item needs a key

Keys help React optimize rendering

Strong rule:
Never use array index as a key unless you fully understand the consequences.

9. Hooks (Beginner Level)

You don’t need all hooks. Talk about:

useState

useEffect

Explain:

useEffect runs side effects

API calls

Running code on component mount

If someone abuses useEffect, that’s a red flag.

10. Controlled Components & Forms

Forms in React are state-driven.

Topics:

Input value tied to state

Handling form submission

Real talk:
If you can build a form in React, you’re no longer a beginner-beginner.

11. Folder Structure (Basic)

You should know:

components/

pages/

App.jsx

main.jsx

Opinion:
Messy folder structure = messy thinking.