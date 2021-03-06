import React from "react"
import BaseContainer from "app/layouts/base_container"
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  IconButton,
  Chip,
} from "@material-ui/core"
import LinkIcon from "@material-ui/icons/Link"
import { Rating } from "@material-ui/lab"

const randomImageUrl = "http://picsum.photos/400"
const getRandomImageUrlSelectedId = (id) => `http://picsum.photos/id/${id}/400`
const articleLists = [
  {
    imageUrl: randomImageUrl,
    title: "ProductHunt - Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://www.producthunt.com/posts/blitz-js",
    rating: 1,
  },
  {
    imageUrl: randomImageUrl,
    title: "Building a fullstack React application with Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://blog.logrocket.com/building-a-fullstack-react-application-with-blitz-js/",
    rating: 3,
  },
  {
    imageUrl: randomImageUrl,
    title: "Github - Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://github.com/blitz-js/blitz",
    rating: 2,
  },
  {
    imageUrl: randomImageUrl,
    title: "Introduction to Blitz.js",
    date: 20200701,
    tag: "Blitz.js",
    url: "https://blog.logrocket.com/introduction-to-blitz-js/",
    rating: 2,
  },
  {
    imageUrl: randomImageUrl,
    title: "Build an isomorphic application with Nuxt.js and Node",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://blog.logrocket.com/build-an-isomorphic-application-with-nuxt-js-and-node/",
    rating: 2,
  },
  {
    imageUrl: randomImageUrl,
    title: "Creating Dynamic Routes in a Nuxt Application",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/",
    rating: 2,
  },
  {
    imageUrl: randomImageUrl,
    title: "How to set up and code Nuxt.js apps fully in TypeScript",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://blog.logrocket.com/how-to-set-up-and-code-nuxt-js-apps-fully-in-typescript/",
    rating: 3,
  },
  {
    imageUrl: randomImageUrl,
    title: "Getting Started with Nuxt.js",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://www.telerik.com/blogs/getting-started-with-nuxtjs",
    rating: 3,
  },
  {
    imageUrl: randomImageUrl,
    title: "7 Frontend Architecture Lessons From Nuxt.js",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://zendev.com/2018/09/17/frontend-architecture-lessons-from-nuxt-js.html",
    rating: 3,
  },
  {
    imageUrl: randomImageUrl,
    title: "How to Use Flat-File Data in a Static Nuxt App",
    date: 20200701,
    tag: "Nuxt.js",
    url: "https://www.freecodecamp.org/news/how-to-use-flat-file-data-in-a-static-nuxt-app/",
    rating: 1,
  },
  {
    imageUrl: randomImageUrl,
    title: "Deep dive into Gatsby — Building a static blog using Gatsby, React and GraphQL",
    date: 20200701,
    tag: "Gatsby.js",
    url:
      "https://levelup.gitconnected.com/deep-dive-into-gatsby-building-a-static-blog-using-gatsby-react-and-graphql-f8cb8d8fd036",
    rating: 2,
  },
]

const BookmarkCard = ({ data, index }) => (
  <Card>
    <CardActionArea>
      <CardMedia component="img" image={getRandomImageUrlSelectedId(index)} />
      <CardContent>
        <Typography>{data.title}</Typography>
        <Typography>{data.date}</Typography>
      </CardContent>
      <CardActions>
        <Chip label={data.tag} color="primary" />
        <IconButton onClick={() => window.open(data.url)}>
          <LinkIcon />
        </IconButton>
        <Rating name="favorite" value={data.rating} max={3} readOnly />
      </CardActions>
    </CardActionArea>
  </Card>
)

const Content = () => (
  <Grid container justify="flex-start" spacing={3}>
    {articleLists.map((data, index) => (
      <Grid item key={index} xs={3}>
        <BookmarkCard data={data} index={index} />
      </Grid>
    ))}
  </Grid>
)

const Bookmark = () => (
  <BaseContainer>
    <Content />
  </BaseContainer>
)

export default Bookmark
