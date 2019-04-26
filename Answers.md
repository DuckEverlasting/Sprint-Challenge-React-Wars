# Answers

1.  What is React JS and what problems does it try and solve?

      React is a library written by Facebook to address concerns they were having with scaling up their web application. It helps simplify organization of large projects by easily breaking up things into reusable components, but more importantly it is reactive - that is, instead of refreshing the full page, it only re-renders items which have changed.


1.  What does it mean to _think_ in react?

      Thinking in React means abandoning a lot of things about how pages and apps were previously build. For example, it means breaking your project up into components, which contain all their specific html and styling information, instead of dividing the project into html, css, and js.


1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

      The main difference is that a Stateful component has a state declared, and therefore can use methods to change the data stored within it. A Presentational component is more static, and is generally used inside a larger component (often a stateful one).


1.  Describe state.

      State is an object within a React component that holds mutable properties of that component. (Mutations can be accomplished mostly by the setState() method.)

1.  Describe props.

      Props is an object within a React component that holds immutable properties of that component. It is used to those properties from outside that component.
