# React Image Search App

- Using Pixabay API to search images
- Using Material-UI with React components
- UI contains 
    - Text-field to enter search term 
    - Number-field for amount of results 
- Each image result has Zoom icon, image tags, username
- Clicking on Zoom icon will open a pop-up dialog with image


## Getting Started

### Get Pixabay API key
1. Login to: `https://pixabay.com`
2. Get API key: `https://pixabay.com/api/docs/#api_search_images`

 
### Create React App
1. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter
2. Update vite.config.js file:
    - Add `server: { port: 3000, }` to `defineConfig()`
3. Install dependencies:
    - Run `npm install`
4. Run sever: `npm run dev`
5. Install Material-UI and Axios:
    - Run `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/lab axios@latest`


### Modify Files
1. Change `index.html` title
2. Clear `src/App.css` and `src/index.css`
3. Delete `public/vite.svg` and `src/assets/react.svg`
4. Remove imports from `App.jsx`:
    ```
    import reactLogo from './assets/react.svg' 
    import viteLogo from '/vite.svg'
    ```
5. Clear & modify main tag in `App.jsx` 
