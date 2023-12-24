---
title: Welcome
---
# Welcome
:::danger DISCLAIMER
The creator of this website operates independently and holds no affiliation with the Government of Jersey.
If you are from the Government, [send me an email](mailto:luke@glitch.je?subject=gov.je%20ui%20docs).
:::


## Why did you create this?
I'm a big fan of open source. The idea that people from all over the world and from all walks of life can contribute to a piece of software to make it the best that it can be is great.

I'm also a fan of the [GOV.UK Design System](https://design-system.service.gov.uk/). They have created an excellent [frontend framework](https://github.com/alphagov/govuk-frontend) that is used all across the UK government, and they have comprehensive documentation available. This makes it easier to rapidly [prototype](https://en.wikipedia.org/wiki/Rapid_application_development) when creating new web based systems.

## That sounds great! Why hasn't the Government done this?
[They have,](https://github.com/StatesOfJersey/SOJ-CSS) to an extent.

The CSS code for Gov.je was open sourced on [October 16, 2016](https://github.com/StatesOfJersey/SoJ-CSS/commit/506ec6f80c3f5d610a46629faf9e6a6d9826cf64) and has had nearly 140 updates - but hasn't been updated since 2020. That's a real shame.

There was some work done by Robbie Andrews in 2017 to create [a documentation website](https://github.com/StatesOfJersey/SoJ-UI-Toolkit) just like this but again, it hasn't been updated since.

## What are you going to do about it?
I'm creating a new CSS framework called `govje-frontend`, based on the current gov.je stylesheet. The new framework doesn't depend on bootstrap (only `bootstrap-grid`) and has various improvements.

> For example, the current stylesheet requires a certain page layout for [Tables](./components/table) - the new version doesn't! Place a table wherever you want, apply the styles and you're good to go!

---

As I develop new features in that framework, I am documenting the components on here.

----

When the framework is complete, I will work on a [React](https://react.dev) based prototyping kit to make it easy to mock up a new website in a matter of hours.

<br/><br/>

:::info Some facts
- This website is built on [Docusarus](https://docusaurus.io). You can write articles in markdown and embed JSX components, which is what I used for rendering components.
- Some of the information on this website is from [this service manual](https://www.gov.je/servicemanual/branddesign/Pages/Guidelines.aspx).
- Find the source code of this website, and other related projects [on GitHub](https://github.com/glitchjsy).
:::