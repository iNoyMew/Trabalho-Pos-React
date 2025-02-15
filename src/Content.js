import React from "react";


export default function Content() {
    return (
        <Content>
            <h1>Hello, World!</h1>
            <p>This is a simple React component.</p>
            <button>Click Me!</button>
          
            <hr />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <footer>Created by Me</footer>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Visit Google
            </a>
            <input type="text" placeholder="Enter your name" />
            <br />
            <input type="checkbox" id="exampleCheckbox" />
            <label htmlFor="exampleCheckbox">
                Example checkbox
            </label>
            <br />
            <select></select>
        </Content>
    );
}