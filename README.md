igem-uOttawa2013-website
========================
In-progress implementation of the uOttawa 2013 iGEM wiki, based on the "micrograph" mockup. HTML sources of older mockups are available under the "mockups" directory.

At some point this wiki will be pushed to iGEM's infrastructure and be live on their website. This won't happen until the website is stable and accessible for all devices (desktops, laptops with trackpads, phones, tablets, screenreaders, etc.).

The working copy of the website should be published to the [github page](http://krutkay.github.io/igem-uOttawa2013-website/) periodically. To do this:

	$ git checkout gh-pages
	$ git merge master  # Fast-forward merge

To avoid fudging up the pages branch, please don't do any development on it. Code on the master branch, test, **then** merge it into gh-pages.

Be happy.

Todo
====
See github.
- Mobile and tablet-optimized versions of Micrograph. Use CSS @-rules, and disable smooth scrolling.
- Test smooth scrolling on: Desktop w/ mouse, mac trackpad, multitouch trackpad, standard trackpad.