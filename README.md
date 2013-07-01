# Adventure Time Animated Lockscreen

Mobile Lockscreen featuring characters from Adventure Time. Because “Sucking at something is the first step to being sorta good at something” –Jake the Dog

Visit the [theme's website](http://GabLeRoux.github.com/Adventure-Time-Animated-Lockscreen) for a realtime demo!


## Preview

![Jake the dog preview](https://github.com/GabLeRoux/Adventure-Time-Animated-Lockscreen/raw/master/preview/jake.png) ![BMO preview](https://github.com/GabLeRoux/Adventure-Time-Animated-Lockscreen/raw/master/preview/bmo.png)


## IOS Installation

### Requirements
- [Jailbroken Device](http://en.wikipedia.org/wiki/IOS_jailbreaking) (they say it's legal)
- [Winterboard](http://cydia.saurik.com/package/winterboard)

### Installation
* Grab the [latest version](https://github.com/GabLeRoux/Adventure-Time-Animated-Lockscreen/raw/master/release/adventure-time-animated-lockscreen-latest.zip) from the `release` folder.
* Extract the `Adventure-Time-Animated-Lockscreen.theme` 
* Send it into your iphone themes directory (Usually something like `/var/stash/Themes.XXXXXX`).


## Developpement
You'll need some basic terminal knowledge and [Node Package Modules](https://npmjs.org/).

### Clone the package
Open a terminal and type in

	git clone https://github.com/GabLeRoux/Adventure-Time-Animated-Lockscreen.git

### Install npm modules

	cd Adventure-Time-Animated-Lockscreen
	sudo npm install

### Start working on the project

	grunt watch

Then edit the files you want!

### Generate a release with minified versions of the files

	grunt release


## Notes

* If the `.theme` is shown as a file instead of a folder, just right click it and click on `edit package content`. It will get you to the theme files
* Only tested on `iPhone 5` running `IOS6`
* Photoshop assets included in `Assets Sources` folder

Font used: [pieces_of_eight](http://www.dafont.com/pieces-of-eight.font)


## Todo

* Add other animations
* Add touch events if possible
* Add some Jake quotes or some other awesome stuff
* Add other more characters
* Push this on a cydia repo
* Support other Devices such as iPad, iPhone 4, etc.
* Support android (maybe with [this](https://play.google.com/store/apps/details?id=com.yaji.weblivewallpaper&hl=en)
* Maybe finding a good way to customize build through `grunt.js` so we can choose languages, show or hide clock, etc.


## LICENCE

[WTFPL](http://www.wtfpl.net/txt/copying/)
