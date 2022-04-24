# Virtualized List

in order to render massive lists in React, we have a few options to make it performant, the first and most popular option is pagination, another powerful option is virtualization.

Virtualization is a way to limit how many elements are rendered on the DOM, so we do not render thousands of elements in the DOM, instead we only render what is visible on the screen, these is a powerful technique used for infinity scrolling applications such as Twitter and Facebook

reference:

https://reactjs.org/docs/optimizing-performance.html#virtualize-long-lists
