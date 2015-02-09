## Website Performance Optimization portfolio project

To inspect the page, just go [here](http://jalilwahdatehagh.com/frontend-nanodegree-mobile-portfolio/) and open dev tools.

### PageSpeed score

I'm getting a PageSpeed score of [95 on mobile](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fjalilwahdatehagh.com%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile) and [97 on desktop](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fjalilwahdatehagh.com%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=desktop) for the index site.

To achieve that i did the following:
- minified the css with gulp.js
- copied that inline
- removed the webfonts
- concatenated and minified javascript with gulp.js
- made all javascript non-blocking by specifying it as `async`
- resizing and optimizing images used on the site

### Pizza Javascript performance

I'm getting constant scrolling framerates of about `10 frames / 0.8 ms` and resizing pizzas takes about `1ms`.

The problems with the provided code were both hidden in loops - the main performance issues being
- unneccessary object lookups during the loop
- unneccessary calculations with each iteration of the loop

I solved the problems by restructuring the loops and calculating as much as possible outside of them.