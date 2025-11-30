# Modern Personal Portfolio

A responsive, dark-themed personal portfolio website.

## Project Structure

- `index.html`: The main structure of the website.
- `style.css`: All styles and responsive design rules.
- `script.js`: Logic to populate content and handle interactions.
- `data.js`: **The single source of truth for all website content.**
- `utility/`: Folder containing assets like images and resume.

## How to Update Content

You do **not** need to edit HTML files to change your information. All content is managed in `data.js`.

1.  Open `data.js` in a text editor.
2.  Locate the section you want to update (e.g., `hero`, `about`, `projects`).
3.  Edit the text inside the quotes.
4.  Save the file and refresh your browser.

### Example: Updating the Hero Section

```javascript
hero: {
    name: "New Name", // Change this
    title: "New Job Title", // Change this
    // ...
}
```

## How to Update Images

1.  Place your new image file in the `utility/` folder (or any folder you prefer).
2.  Open `data.js`.
3.  Update the `image` path for the relevant section.

```javascript
image: "./utility/new-photo.jpg",
```

## How to Update Resume

1.  Replace the `VEERU PAL Resume.pdf` in the `utility/` folder with your new PDF.
2.  Ensure the filename matches what is in `data.js`, or update `data.js` to match the new filename.

## Deployment

This project is ready to be hosted on GitHub Pages or any static site host.
