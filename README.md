# The React Cook Book

the objective of this project is to re-create a cookbook web blog

This time we will leverage the power of React and Contentful to create a single
page react web-app that will consume data from a remote api hosted by contentful

This tutorial will be your best friend https://www.youtube.com/watch?v=AWie7zwAyU0

# Level 1 
- The Remote API
  - Register in contentful and create a new space
  - Create a content type 
    - Recipe, with fields: title & body of type short text & text respectively 
    - add any other field that you see fit, be aware that rich text fields are harder to use 
  - Create some testing content
  - Get your API keys

## Optional (HARD)
- Add a content type Category, with a single field "name"
- Add a category field to recipes (category must be a reference )


- The React App
  - create a new React app
  - install https://github.com/contentful/contentful.js
  - You will have to use bootstrap or any other CSS framework of your choice for this project
  - The cookbook will be a single page application implementing the following functionality
    - a search form to filter results by title (optional add category)
      - you must use reacts useRef hook to track the value of the form's inputs 
    - a list of recipes displaying the searched recipes 
    - on click on each recipe you must decide how the selected recipe will be shown to the user without reloading the page
    - it must consume data from your contentful space
    - you must use contentful client ``import {createClient} from "contentful";``


# Level 3
- React router, we will use React's router component to handle our cookbook so our browser address bad reflect the current state of the application 
and also to be able to load those states on demand
  - You must implement react router to store and retrieve the query params on the address bar
  - when viewing a recipe the address bar must be updated & loading that our should trigger the recipe detail's view

# optional level 1
- My First Login
  - you should attempt this step only if you feel comfortable learning some react on your own!
  - We will implement our VERY basic login, when the user first load our app it will be prompted for their space id and accessToken.
We must store them in our apps' context.
  - you must use Reacts useContext hook to store the users credentials
  - you must implement "remember me" & "log out" using localstorage
  - you must validate them before granting access, you can do that with the following async function
  - ```
    const auth = async () => {
    try {
    const response = await fetch( https://graphql.contentful.com/content/v1/spaces/[user's space]/explore?access_token=[user's accessToken])

            return response.ok
        } catch (error) {
            console.error(error);
        }
    }
    ```
    - https://beta.reactjs.org/reference/react/useContext 
    - https://www.w3schools.com/react/react_usecontext.asp


# Optional Level 2
- You must implement the functionality to CRUD recipes from your app
  - when your user is logged it should be able to create a new recipe 
  - and it should be able to edit in place existing ones or delete them