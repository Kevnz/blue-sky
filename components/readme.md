# Components

I have been working on a talk on learning web components. However the landscape is sad. Vanilla Web Components are very verbose, especially when doing DOM work. And then the fact the js is class based too.

I was actually surprised there wasn't a `react-web-component` rendering system. It would seem to me that JSX would be a natural fit for web components. But most template systems that I found used string template literals. I don't like putting any type of code in a string. I don't like having to have an extension installed in every editor to get syntax highlighting for html/css/javascript hidden away in a string.

So the idea. Use html. Template, Style, and Script tags are already there. So a "loader" grabs the html glues the pieces together as a web component.