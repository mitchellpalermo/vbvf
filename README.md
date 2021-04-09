# Verse by Verse Fellowship

This site was made to replace an aging wordpress site. As the church grew, we started to require more from our site, and after awhile we outgrew what the wordpress platform could offer.

### Hosting

This site is being hosted on Netlify, chosen for its ease of deployment and ability to handle some of the more sticky problems.

### Content

Our content (bible studies, childrens lessons, etc.) is being served through Sanity CMS. Using their GROQ query language, we can dynamically present materials on the site without having a to match up content on the Client after making service calls to DropBox or Vimeo.

PRs welcome!

## Running Locally

In the project directory, you need to run:

1.  #### `yarn install`

This will install the dependencies that the project requires to run correctly.

2. #### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
