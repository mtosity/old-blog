---
template: post
slug: impove-pixie-expert-profile-page-seo-1
draft: false
socialImage: /media/nextjs-logo.png
title: Pixie expert profile SEO optimization part 1
date: 2021-10-03T10:59:05.941Z
description: Improve Pixie product overtime (SEO part 1)
category: SEO
tags:
  - Pixie
  - NextJS
  - SEO
---

# Disclaimer

I am no near expert in SEO optimization, but I am a developer who always want to try out and learn new things also help improve company product recognition (gotpixie.com). Also at my level, I think the best way is to improve product overtime rather than try to do the best practice (if I knew one lol).

# Current state of expert profile page SEO

## What we achieved

We using NextJS server side rendering to fetch expert profile in frontend server then give back the user "full HTML" of the page, it contains basic meta tags link title = "Expert name | Pixie", description = Expert bio, image thumbnail attached to profile avatar.

Also we using [next-seo](https://github.com/garmeeh/next-seo) making config SEO a lot easier.

```jsx
<NextSeo
  title={`${profile?.lastName} ${profile?.firstName} | Pixie`}
  description={`${profile?.expert?.headline}. ${profile?.expert?.bio}`}
  openGraph={{
    title: `${profile?.lastName} ${profile?.firstName} | Pixie`,
    description: `${profile?.expert?.headline}. ${profile?.expert?.bio}`,
    images: [
      {
        url: profile?.avatar || "default-avatar.jpeg",
        alt: "avatar",
      },
    ],
  }}
/>
```

After having all the basic meta tags, we using [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) to generate `sitemap.xml` file that contains all the statics page, `server-sitemap.xml` will first fetch all the experts and map to expert profile url to the sitemap. Then we bring our website to the google console and add that 2 sitemaps, after like a week or 2, we can search expert profile right on Google:

![](/media/pixie-seo-1/Screen Shot 2022-03-11 at 03.19.45.png)

The results:

![](/media/pixie-seo-1/Screen Shot 2022-03-11 at 03.12.16.png)

![](/media/pixie-seo-1/Screen Shot 2022-03-11 at 03.22.11.png)

Yah, we have our thumbnail when share to social media and Google Search recognized us 🎉

## The problems

### Getting "all experts" when generate `server-sitemap.xml`

We now have more than 100 expert's profiles and when build the app we basically get all 100 profiles in _one_ API call, lol, and yes it did crash when building the docker image.

To fix this is quite simple, get the backend team to support pagination the get all expert api, and option to get only the expert id, we only need the id to parse url `gotpixie.com/experts/[id]`.

Also, we need to splitting the sitemap into multiple files when it get too big. In `next-sitemap.js` in root folder adding `sitemapSize: 3000`. When the number of URLs in a sitemap is more than 3000, `next-sitemap` will create sitemap (e.g. sitemap-0.xml, sitemap-1.xml) and index (e.g. sitemap.xml) files.

### Do we need more meta tags?

Well I think we do, so I go to different famous websites to have a sneak of what they did. I came to conclusion that we will add these type of meta tags:

#### keywords meta tag

#### Twitter meta tags
