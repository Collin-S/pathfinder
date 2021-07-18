# pathfinder
This website is designed to tell you all about the adventures of my pathfinder group! I will include resources, links, and information about tabletop roleplaying games. 

I used a "mobile first" approach to the layout. The videos.html and videos.css is the content for when the user clicks on the "Videos" tab in the nav bar. As well as the "Podcasts" and the "References" tabs redirect to those pages.
The references page is for useful websites and applications you can use if you would like to learn or play tabletop RPGs.

## CSS Features
- [x] Pure css navigation menu with hamburger button for mobile users
- [x] The main content of the page displayed with css grid for a larger viewport where as they are flex when on tablet and mobile sizes. 
- [x] I also use #p1::first-letter and #p2::first-letter because I liked it!

## JavaScript Features
The d20 button at the bottom of the page uses a the Math.floor and Math.random function to roll a "d20" and innerHTML to read and replace the content within the "dice face" with the result which we get by clicking the button which uses the onclick function.
- [x] Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format. I use the regex to validate the name and email field.
- [x] Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event).
- [x] Create a form and save the values (on click of Submit button) to an external file. You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted (currently shows up in the terminal). The "Contact me for more D&D fun!" form is the form that saves. The form for choosing my next class is just a css/html example.

### Media Queries
I have three media queries. 
- [x] @media (min-width: 901px) This one is for larger screens
- [x] @media (max-width: 414px) I use this one for mobile screens. Mainly for the hamburger button, but also to change the layout from grid to flex for the sessions content.
- [x] @media (min-width: 415px) and (max-width: 900px) And then I use this one to catch things in between. Mostly for tablet sizes.