# pathfinder
This website is designed to tell you all about the adventures of my pathfinder group! I will include resources, links, and information about tabletop roleplaying games. 
The videos.html and videos.css is the content for when the user clicks on the "Videos" tab in the nav bar. As well as the "Podcasts" and the "References" tabs redirect to those pages. There isn't anything on those pages. I just did it to show that we can redirect using the nav bar. However, they do contain a back to home button and links to the other two directories.

## CSS Features
- [x] Pure css navigation menu with hamburger button for mobile users
- [x] The main content of the page displayed with css grid for a larger viewport where as they are flex when on tablet and mobile sizes. 
- [x] I also use #p1::first-letter and #p2::first-letter because I liked it!

## JavaScript features
The d20 button at the bottom of the page uses a the Math.floor and Math.random function to roll a "d20" and innerHTML to read and replace the content within the "dice face" with the result which we get by clicking the button which uses the onclick function.

### Media Queries
I have three media queries. 
- [x] @media (min-width: 901px) This one is for larger screens
- [x] @media (max-width: 414px) for mobile screens
- [x] @media (min-width: 415px) and (max-width: 900px) And then I use this one to catch things in between. Mostly for tablet sizes.