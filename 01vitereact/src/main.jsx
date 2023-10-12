//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// React bhi apni tree structure mein banati hai object banati hai

// this will not work kyum ki react peeche apne type ka name expect kar rha hi
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

// this will work

// const reactElement = (
//   <a href='https://google.com/'>click me</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com', target: '_blank'},
//   'Click me here!'
//   anotherElement // this is how variable is inserted    
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
