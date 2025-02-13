---
title: Welcome
hide_table_of_contents: true
---
# Welcome
:::danger DISCLAIMER
The creator of this website operates independently and holds no affiliation with the Government of Jersey.
If you are from the Government, [send me an email](mailto:luke@glitch.je?subject=gov.je%20ui%20docs).
:::


## Why did you create this?
I'm a big fan of open source.

I'm also a fan of the [GOV.UK Design System](https://design-system.service.gov.uk/). They have created an excellent [frontend framework](https://github.com/alphagov/govuk-frontend) that is used all across the UK government, and they have comprehensive documentation available. This makes it easy to create quick prototypes when creating new web based systems.

I've also noticed that there isn't always uniformity across Government websites, maybe my work here can give the Government some ideas to improve. 

## What actually is this?
I'm creating a CSS framework called `govje-frontend` which is mainly based off the current gov.je stylesheet but with plenty of improvements. The new framework doesn't depend on bootstrap (only `bootstrap-grid`).

I'm also creating a [React.js](https://react.dev) wrapper for each component to allow rapidly creating prototype web pages.

An example of the improvement with `govje-frontend` is that the current stylesheet requires a certain page layout for [Tables](./components/table) - the new version doesn't! Place a table wherever you want, apply the styles and you're good to go!

Here is an example of the React wrapper being used to create a test website in [about 60 lines of code](https://gist.github.com/lukeeey/5b28a01126b40439227ed831bc8eaf60):

![example image](/img/example1.png)

## Some facts
- This website is built on [Docusarus](https://docusaurus.io). You can write articles in markdown and embed JSX components, which is what I used for rendering components.
- Some of the information on this website is from [this service manual](https://www.gov.je/servicemanual/branddesign/Pages/Guidelines.aspx) on gov.je.
- Find the source code of this website, and other related projects [on GitHub](https://github.com/glitchjsy).