---
title: "Electron alternative: Announcing vue-nodegui 🚀💚"
subTitle: "Taking a look at the new released vue-nodegui library. A cross platform, native desktop application builder powered by vue and nodegui"
coverImage: "/img/announcing-vue-nodegui.jpg"
coverCredit: "Photo by <a href=\"https://unsplash.com/@dietteh06?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\">DiEtte Henderson</a> on <a href=\"https://unsplash.com/s/photos/present?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\">Unsplash</a>"
date: 2020-10-03
---
In this blog post, we shall take a look at vue-nodegui, a newly-released JS library to create cross-platform native desktop applications using VueJS 💚

- repo link: https://github.com/nodegui/vue-nodegui
- documentation site: https://vue.nodegui.org

### Why not electron?

Before we dive into vue-nodegui, let us discuss the most popular alternative out there: Electron ⚛️

Electron has been the most popular library for creating desktop applications using JS for a while now. While it is an amazing solution, it has some severe pain points by design:

- Electron apps tend to be bloated because every Electron app ships a version of the Chromium browser in which it runs. Hence, it's not _truly_ native.
- Electron apps also suffer from excess CPU/memory utilization issues.

### What's vue-nodegui? 💚

vue-nodegui is a custom vue3 renderer for [nodegui](https://github.com/nodegui/nodegui), a native JS bindings library for [Qt5](https://www.qt.io/). Below is an excerpt from the nodegui announcement last year:

> "_NodeGUI is powered by Qt5 💚 which makes it CPU and memory efficient as compared to other chromium based solutions like electron. NodeGui wants to incorporate everything that is good about Electron: The ease of development, freedom of styling, Native APIs, great documentation, etc. At the same time NodeGui aims to be memory and CPU efficient._"

vue-nodegui allows developers to use the familiar Vue API to create their native desktop app - something that react-native does for react. Since vue-nodegui is ultimately powered by Qt5, it means that vue-nodegui does not require a browser environment to render in. Instead, the widgets in the app are truly native.

### Features 💎

- Access to new Vue3 features (`setup`, `composition api`, etc)
- 🧬 Cross platform. Should work on major Linux flavours, Windows and MacOS
- 📉 Low CPU and memory footprint. Current CPU stays at 0% on idle and memory usage is under 20mb for a hello world program.
- 💅 Styling with CSS (includes actual cascading). Also has full support for Flexbox layout (thanks to nodegui and Yoga).
- ✅ Support for all node_modules (compatible with Node v12 and above)
- 🎪 Native widget event listener support. supports all event available from Qt / NodeJs.
- 💸 Can be used for Commercial applications.
- 📚 Good documentation and website.
- 🧙‍♂️ Good documentation for contributors.
- 🦹🏻‍♀️ Good support for dark mode (Thanks to QT).

### Requirements 📝

Below are the general requirements for systems to create vue-nodegui apps:

- Only supported on 64bit OS.
- CMake 3.1 and up (Installation instructions can be found here: https://cmake.org/install/)
- Make, GCC v7
- NodeJS v12.x and above

You can find the detailed installation steps for each of the requirements and troubleshooting guide on the [Getting started](https://vue.nodegui.org/docs/guides/1-getting-started) page.

### Let's try it out 🤩

To get started, let's first clone the starter repo:

```shell
git clone https://github.com/nodegui/vue-nodegui-starter hello-world
cd hello-world
npm install
npm run dev
```

Let's create a basic hello-world project with a counter

_Clear out the contents of `App.vue` and write the below code in it_

```html
<template>
  <vn-view :styleSheet="styles">
    <vn-text id="header">Hello world</vn-text>
    <vn-view id="row">
      <vn-button @clicked="decrement">-</vn-button>
      <vn-text id="count">{{count}}</vn-text>
      <vn-button @clicked="increment">+</vn-button>
    </vn-view>
  </vn-view>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value += 1;
    }

    const decrement = () => {
      count.value -= 1;
    }

    const styles = `
      #header {
        padding: 10px;
        background: #36495e;
        width: 200px;
        color: #fff;
        qproperty-alignment: AlignCenter;
      }
      #row {
        width: '100%';
        flex-direction: 'row';
        justify-content: 'center';
      }
      #count {
        padding: 5px;
        qproperty-alignment: AlignCenter;
      }
    `

    return {
      count,
      decrement,
      increment,
      styles
    }
  }
};
</script>
```

After running `npm run dev` to fire up the app in your terminal, the output should look like the screenshot below

<img src="/img/vn-hello-world.gif" alt="sample-vue-nodegui-app" style="max-width: 100%; align-self: center" />

As you can see, we have created a basic counter application by using the very familiar Vue API. 🚀🤘🏽

However you may have notices new tags: `<vn-view>, <vn-button>, <vn-text>` These are what we call native-tags in vue-nodegui. To create any vue-nodegui application, you will have to use these. You can check out the entire catalog of widgets [here](https://vue.nodegui.org/docs/api/interfaces/buttonprops)

### Contributions and Support ☃️

If you went through the [vue-nodegui repo](https://github.com/nodegui/vue-nodegui), you would have realized that even though it is an awesome project, it is still in it's infancy. Some more work on creating widgets and an ecosystem around it would be required before we can use it in production apps. This is where you all come in! 🚪

We wholeheartedly welcome any kind of contributions for vue-nodegui - code, documentation, sister libraries (animation, testing, components) in the form of [pull-requests](https://github.com/nodegui/.github/blob/master/CONTRIBUTING.md). We have also opted into the [#Hacktoberfect](https://hacktoberfest.digitalocean.com/) to encourage these contributions! 🥳

If you liked the project, please show your support by starring the repo [![GitHub Repo stars](https://img.shields.io/github/stars/nodegui/vue-nodegui?style=social)](https://github.com/nodegui/vue-nodegui)

If you are able to support financially 💵, kindly feel free to sponsor this project <a href="https://github.com/nodegui/vue-nodegui" target="_blank"><img src="/img/sponsor.png" height=25 /></a>

Super excited to build something magnificent together! ❤️

Cheers ☕️
