# bearbuzz

## my first attempt at making an extension for a browser

**TO INSTALL**:  it is not signed, so you'll have to install it locally and 
install it in developer mode. It currently only works for Microsoft Edge.
1. clone the repository
2. type edge://extensions in the address bar
3. click 'Load unpacked'
4. navigate to where you cloned the repository and click "select folder"
5. click the UI to "turn on" the extension.

**TO UNINSTALL**:
1. type edge://extensions in the address bar
2. click 'remove' on the bearbuzz extension
3. you may now delete the repository if you wish.

**NOTE**: if it doesn't work at first, press a button on the controller, and 
the extension should then see it.

**NOTE2**: it's currently buggy and will not only work when it's supposed to,
but every time you type in a coding window for some reason...so that's a TODO:

**NOTE3**:I suggest you look at the source code to 
verify it's not doing anything weird, as you would anything you download 
from a public repository.

## DEV NOTES
I was inspired to write a browser extension while looking at boot.dev, 
and I was wanting to make some sort of special thing happen when 
successfully submitting an assignment.

Looking at various APIs I learned that I could make a controller vibrate,
I figured out how to do that, and I started reading the browser extension 
documentation on microsoft to figure out how it works.

Since there's no API for boot dev, I had to dig through the site code to 
see if there was anything I could watch for, but outside of scraping data 
which is against the TOS for boot.dev, and not wanting to get in trouble, 
I had to keep looking.

I started digging through the site code and discovered that it dynamically 
creates, then removes the animation from the DOM, and that's why nothing could 
be found for the confetti animation.  Minified javascript is tedious to debug.
Finally I decided to just watch the DOM, and when an animation is added to the DOM,
buzz the controller.   This means it will buzz not only for successful submits, 
but also for notification modal animations.
