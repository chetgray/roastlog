# Roast Log

Roasting coffee generates a lot of data: temperatures, times, weights,
TDS readings, tasting notes. When this is recorded on paper,and left
unindexed, referencing and comparing the data is a significant pain
point, and the data cannot be fully leveraged to improve the roasting
process.

**Roast Log** intends to allow for easy search and display of this
data.

## Code Louisville

**Roast Log**, in its initial front-end-only form, also serves as my
project for [Code Louisville's][Code Louisville] Front-End Web
Development course, Jan–Mar 2018. The `master` branch is live, served
by GitHub Pages at [http://www.chetgray.com/roastlog/][roastlog live].
To view locally, `git clone` [`chetgray/roastlog`][roastlog git] and
`git checkout master` or download and extract a [zipped archive of the
repository][master zip], and then open `index.html` in your web
browser.

### CSS

Though overall styling is minimal, a couple things can be pointed out.
`font-size` is set on `html` with a calculation based on the viewport
width, which smoothly scales the root font size from 14px (assuming the
common 16px browser default) on 320px-width screens to 22px on
1440px-width screens. Descendent `rem` and `em` font sizes are based on
that scaled size, so it's subtly scaled all the way down (and up). A
`min-width` breakpoint keeps the layout tight on larger screens, and a
flexbox-implemented sticky footer keeps the negative space wide open.

There is some key CSS involved in tab funcionality, as well.
Tab-specific styles are in `style/tab.css`, styling the `.tabs` nav
list and the corresponding sections in the same `.tabs-container`. It
hides sections by default, and displayed when they become `.active`. On
small screens, the tabs are restyled into an accordion menu (which
would be more useful if there were more tabs...)

I'm having some issues with the width of the chart that I've not been
able to fully address yet...

### JavaScript

The scripts for this project manage three things: the tabs, the search
form, and the chart. Tab logic is in its own file at `script/tabs.js`,
where a `Tabs` object keeps functionality nicely contained. We capture
click events on the nav tab items, and add and remove `.active` and
`.open` classes on the necessary tab and section elements, then that
CSS takes care of styling them. Easy peasy.

In `script/main.js`, we use AJAX to bring in a JSON file with a bunch
of roast log data, and the file is really divided into what's inside
versus outside of that callback. Outside is stuff that doesn't directly
depend on the JSON: initializing the chart, defining functions to load
data into the chart and put together title strings, and setting a
handler for minor form styling. Inside is stuff that tries to access
the parsed JSON: handling the actual search and then clicking on
results.

## The Future

I intend to improve on this to the point I can use it in my work in
commercial coffee roasting. I expect that as I learn more about web app
programming, I will be able to build this up bit by bit, and I hope I
can use it as a motivator for practice.

[Code Louisville]: https://www.codelouisville.org/
[roastlog live]: http://www.chetgray.com/roastlog/
[roastlog git]: https://github.com/chetgray/roastlog.git
[master zip]: https://github.com/chetgray/roastlog/archive/master.zip
