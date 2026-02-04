# REAL-TIME-CHAT-APPLICATION

COMPANY : CODETECH IT SOLUTIONS

NAME : SNEHAL SUDRIK

INTERN ID : CTIS2304

DOMAIN : FRONTEND WEB DEVELOPEMENT

DURATION : 4 WEEKS

MENTOR : NEELA SANTOSH

HTML 
The index.html file provides the complete structure of the Real-Time Chat Application. It defines the layout of the webpage including the main chat container, heading, message display area, input field, and send button. The HTML file acts as the foundation of the application, organizing all elements in a clean and structured format. It ensures that the interface is simple, readable, and easy to understand. The chat box is created as a separate section where messages are dynamically inserted using JavaScript.
This file also links the external CSS file for styling and the JavaScript file for functionality. By separating structure, design, and logic into different files, the project follows proper web development practices. The HTML structure is kept minimal and semantic to maintain clarity and maintainability. Overall, the HTML file defines the skeleton of the chat application and provides the base on which styling and functionality are applied.

CSS 
The style.css file is responsible for designing and styling the user interface of the chat application. It enhances the visual appearance by applying layout styling, colors, spacing, alignment, and responsiveness. The chat container is centered on the screen with a fixed maximum width, rounded corners, and a soft shadow to give it a modern and clean look. The message display area is scrollable, allowing users to view previous messages easily.
CSS is also used to differentiate between user messages and server messages. User messages are aligned to the right side with a blue background, while server responses appear on the left side with a light gray background. This alignment improves readability and user experience. Additionally, hover effects are applied to the send button to make the interface interactive. The responsive styling ensures that the application works smoothly on different screen sizes, making the design flexible and user-friendly.

JavaScript 
The script.js file handles the entire functionality and logic of the chat application. It establishes a WebSocket connection with a public echo server to simulate real-time communication. When a user types a message and clicks the send button (or presses Enter), the message is sent through the WebSocket connection. The server then echoes the same message back, which is displayed in the chat box as a received message.
JavaScript dynamically creates message elements and appends them to the chat box using DOM manipulation. It also prevents empty messages from being sent and automatically scrolls the chat box to the latest message for better usability. The WebSocket event listeners manage sending and receiving data in real time, making the chat application interactive and dynamic. Overall, JavaScript plays a crucial role in enabling real-time communication, updating the interface instantly, and ensuring smooth user interaction.
