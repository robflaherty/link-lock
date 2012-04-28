# Link Lock
Have you ever been reading something on a tablet or mobile device, touched the screen to scroll, and accidentally tapped on a link? Argh! It's especially frustating if you're on a low-bandwidth connection, reading offline, or viewing non-mobile-friendly pages.

Sometimes I've wished there was a way to "link lock" a page (similar to the way orientation lock works) to prevent me from accidentally navigating away from the current page. So that's what this script tries to do.

Although it's fairly production-friendly (I have it [running on my blog](http://www.ravelrumba.com)) right now it's intended as a proof of concept. I'm curious to know if this is something others have thought about or if I'm just especially clumsy and cranky when it comes to accidentally activating links.

## Using
On touch devices that support basic touch events, tap-and-hold with 3 fingers to toggle the link lock state. Successful toggling will be indicated by an icon in the center of the screen as well as an opacity effect on all link elements.

Sometimes you have to try a few times to get the 3-finger hold event "to take". Multi-touch is kinda hard.

There's probably a better activation event than a 3-finger hold but it gets tricky trying to dodge OS gestures as well as basic browser navigation gestures. Suggestions?

## Set up
Make sure you're using jQuery 1.7+ and then just include `linklock.js`.

## Demo
* If you're using a supported touch device you can try it out on [any page of my blog](http://www.ravelrumba.com).
* If you're on a desktop you can view this [mousedown event simulation page](http://www.ravelrumba.com/code/demos/linklock/).

## Device support
So far I've only tested this in Mobile Safari on my iPad and iPhone. Android and Opera testing coming soon.

## Contact
[@robflaherty](https://twitter.com/#!/robflaherty)

## License
Licensed under the MIT and GPL licenses.