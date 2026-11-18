# Accra Grammar School

Source code for the Accra Grammar School website.

**Live site:** https://agsedu.org

## About

This project handles the school's public-facing website, including school information, admissions content, news and publications.

The frontend is built with React, Vite and Tailwind CSS. The production website is hosted on Bluehost.

## Running locally

You'll need Node.js and npm installed.

```bash
git clone https://github.com/fidelnyame-80/ags-edu.git
cd ags-edu
npm install
npm run dev
```

To generate a production build:

```bash
npm run build
```

The build output is in `dist/`.

## Deployment

The live site runs on Bluehost. Changes should be tested locally and built before being deployed.

The GitHub repository is the source for the website code, but not necessarily for every file already on the server. Server-managed content, including SpiderNews publications and existing archives, must be checked and preserved during deployment.

Do not commit hosting credentials, environment files or other private configuration.

## Maintenance

Website updates, fixes and improvements are tracked through Git. Changes to the live site should be verified after deployment.
