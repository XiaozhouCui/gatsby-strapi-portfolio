## Update backend content in Strapi

- Go to folder _strapi_ and open terminal
- Run `docker compose up`
- Go to strapi admin console `http://localhost:1337/admin/`
- Make updates to the contents and save or publish

## Update frontend Gatsby

- Go to folder _gatsby-strapi-portfolio_
- Run `npm run clean` to clean the cache
- Run `npm start` to start the dev server
- The app is available on `http://localhost:8000/`

## Build the project

- Make sure the backend Strapi is running in docker
- Run `npm run clean` to clean up cache
- Run `npm run build` to generate static site with Gatsby
- Once built, copy the folder _public_ to AWS S3 bucket, or run `npm run deploy`
- Create invalidation in CloudFront to force update, or run `npm run invalidate`
