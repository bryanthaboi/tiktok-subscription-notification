
# TikTok Subscription Alert

This is a workaround to get subscription alerts on your stream whether its in OBS, SLOBS, or TTLS.

It's slightly complicated to set up, but once you get it going the first time, it's a no brainer.

The notification has sound, animation, and even confetti!

Again, this is just a workaround, temporary until TT allows us to get sub info direct (or changes the way they do sub alerts to be like everything else so that tikfinity can get the data).

![App Screenshot](https://github.com/bryanthaboi/tiktok-subscription-notification/raw/main/screenshot.jpg)
## Preparation (one time steps)
1. Install [Node.js](https://nodejs.org/) on your system
2. Download the package [with this link](https://github.com/bryanthaboi/tiktok-subscription-notification/archive/refs/heads/main.zip)
3. Extract it wherever you want
4. Open a console/terminal in the root directory of the project
    - (right click in the directory and press open powershell/open terminal here)
5. Enter `npm i` to install all required dependencies
6. Install [tampermonkey extension for chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en).
7. Install the user script to tampermonkey by [clicking here](https://github.com/bryanthaboi/tiktok-subscription-notification/raw/main/Subscription%20Socket.user.js)
8. Install [always active window extension](https://chrome.google.com/webstore/detail/always-active-window-alwa/ehllkhjndgnlokhomdlhgbineffifcbj/related?hl=en) so the page can keep refreshing

## Add source to OBS (also one time)
1. Add to your scene a browser source with the URL: http://localhost:8085
2. Keep everything else the same.

## Every time before you go live (sort of, see below)
1. If you dont still have powershell/terminal open, reopen it in the same place 
2. Enter `node server.js`
3. In chrome, go to https://livecenter.tiktok.com/subscription/my_subscription
    - Leave this window open on your computer
    - Might need to stay visible or be the active tab in the browser

## Steps for success in future after all this setup
1. Start the server 
    - (Enter `node server.js` in the command prompt in the project folder like before)
2. Open OBS or refresh the browser source if it is not visible
3. Open https://livecenter.tiktok.com/subscription/my_subscription in an active browser tab

## Please consider supporting me by any of the following ways
- [Follow me on tiktok](https://tiktok.com/@bryanthaboi)
- [Tip me](https://bryanthaboi.com) (go to this site and click tip)
- [Buy some bois club merch](https://streamlabs.com/bryanthaboi/merch)

## Coming soon
- Requests for custom overlays, chat readers, and chat overlays
- Join the [bois club discord](https://bois.icu) and add me on discord to request this sort of thing
