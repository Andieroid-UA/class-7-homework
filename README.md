# Things I need to fix:
=======================
1. Exercise 2 have an error, but have figured out how to place under a collapsed group

2. Finish Exercises 6-8. Added notes, but did not finish homework

# Questions:
============
1. Why are the collapsed groups out of order? Is this due to the callstack?


## NOTES:
### 1. What are Design Patterns?
================================
    https://youtu.be/BWprw8UHIzA?si=1fbwZd-TV7L3UYCA

    General, reusable solution to a reoccuring problem in software design. Practices devs can use when designing an app or software system.

    ***Notice: Ettiquite, does not need to be implemented everywhere all the time


### 2. Builder Pattern - Design Patterns
========================================
    https://youtu.be/M7Xi1yO_s8E?si=z1v4KkpNWPC95nYv
    (see exercise 1)
    - create objects that have many working parts, that need to come together to make ONE single working object

    ***Note: Instead of putting a butt-load of "sets" for parameters and putting undefined for the ones you don't want/have data for we will instead 


### 3. Facade Pattern - Design Patterns
=======================================
    https://youtu.be/fHPa5xzbpaA?si=1G-fIfGd1BOMzPxE
    (see exercise 2)
    - Facade works with commands like "Fetch"
    - "Fetch" is to connect to things (APIs). Trade it out later for axios


### 4. Observer Pattern - Design Patterns in JS
===============================================
    https://youtu.be/PldXoGemkyk?si=3TseXgJwRHQk0-sv
    (see exercise 3)
    - an object (the subject) maintains a list of dependents (observers) and notifies them when the state changes, usually by calling a broadcast method

    EventTarget.addEventListener() is an example of the observer pattern

    - RxJS uses observables

    - Think of the subject as being a Youtuber, and the updates/observables go to each "observer/watcher"

    ***Note to self, it DOES matter the script order you place in the HTML... wasn't able to call an API because of that


### 5. Learn JS Destructuring (for Beginners)
=============================================
    https://youtu.be/0EgAQUjRTdU?si=g0xP9Wx5bXoUYjmd
    (see exercise 4-1 through 4-14)
    - This works with objects and arrays
    - Exercise "4-10" may come up in an interview question
    - The way you place items matters!

### 6. JS Spread Operator: How it works
=======================================
    https://youtu.be/pYI-UuZVtHI?si=EnV4gIWXeM8sLkJa 
    - Spread = "..."
    - Spread syntax allows an iterable such as ana array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

    This means there are 3 places you can use spread:
    1. In function calls, when you are executing a function
    - each interval is set off as a seperate argument (see exercises 5-1 through 5-3)

    2. In array literals, when you are making a new array

    (see exercises 5-4 through 5-6)
    - You can copy arrays. Spreads
    - Spread only goes ONE level deep. Does not do deep level structures

    3. In object literals, when you are making an object
    (see exercise 5-7)
    - You can grab multiple existing objects and CRAM them together into one object

    4. (BONUS) Why you should care about this...
    (see exercise 5-8)
    - (put React in your mind) Immutablility, not wanting to change/mutate important data. The state controls the data. We don't want to take the data and add on to the original! Instead we copy it and make an udpate to the copy. Then we take the altered copy to change the application

### 7. Memoization and Dynamic Programming Explained
====================================================
    https://youtu.be/WbwP4w6TpCk?si=Vu8i9Ws-ejdIdlYf 
    (see exercise 6)
    - The script slow to load your data? Memoization stores the previous results, so it returns the previous data simultaneously. Saves it in the cache
    - Help you from making a bunch of calls to the server, have previous results just saved them
    - Dynamic programming: take a recursive function that calls itself mult times with the same inputs, just save those inputs...
    - Creating the fibbonaci sequence...


### 8. JS Callbacks (Essential for asynchronous code)
=====================================================
    https://youtu.be/kz_vwAF4NHI?si=uFVrG11UYomTlKpU
    (see exercise 7)
    -Functions are first class citizens, a callback is a function you pass as apara to a function. That function will do some work, then call back that function back...

    Example: Getting an oil change, which number can I reach you at when it's ready? (the callback is giving a call back to the OG customer)

    - The order MATTERS! In which order will things be logged out in? (see example 7-1)
    - (cb) is a parameter of callback
    - (4:44) Asynchronous example, we discussed synchronous examples beforehand
    -Callbacks are functions that get passed to another as a parameter, that function will do some work then call the callback function tells them do whatever you want to do with this thing

### 9. How Async JS works
=========================
    https://youtu.be/1Z7FjG--F20?si=z_0oFxPkNUnZOY-i 

1. (1:03) Global Execusion Context
    (see exercise 8-1)
    - Environment running our code is our global context. Gets added to callstack


2. (2:47) Call Stack
    (see exercise 8-2 through exercise 8-3, exercise 8-3 starts at 6:05)
    - Callstack: keep tabs on what code we run at what time
    - Main gets added to callstack, things get stacked on top of it, things at top are executed, once executed they are removed
    - So first will be logger(), then main(), then callstack is empty
    - Off-loading (sending work to server than main computer) the set timeout when it's set to zero. Taking the web apis and set to the browser to run in the background
    - So SetTimeout (5000) is going to the web API, then when it's done it's going to the "callback queue"
    - Callback listener perhaps is set to "removeToDo", it goes to web API then when it's finished it goes to the event loop and then is added to the callstack


3. (10:05) Callback Hell
    (see exercise 8-4 through 8-5)
    - Callback a function that is a parameter
    - You can place a callback in as a parameter to the function. THE TURDUCKEN LIVES HERE! But it gets messy...
    - Effective delayed execution of functions, the other completes and returns with some data.

    ***This is to know what it does and works like, nasty and not ideal...

4. (14:36) Promises/ Promise Example
    (see exercise 8-6)
    - Promises are the completion of an asynchronous function. We are expecting a result back in the future or an error, and based on that we want to do something with it (show on screen? Fetch more data?). Same goal as callback but with more features and a more readable syntax
    - can add:
        promise.catch()
        promise.finally()
        promise.then()

    - can chain together multiple ".thens"

5. (20:07) Promise Example 2
    (see exercise 8-7)
    - Note: It's res... not response. Be mindful of syntax
    - Most likely going to use Fetch which will auto return a promise
    - finally will run whether the promise is rejected or resolved

6. (22:51) Async Await
    (see exercise 8-8)
    - Just syntactical sugar... make the function very easy and readable
    - gives you ability to have syncrhonous looking syntax, easy to see what is going on
    - you can add the ".then" at the end of a fetch command
    - in new versions of node, and some browsers, don't need to create async. Could just do await at the top of the function...

    *** You see await, it will be an asynchronous command