--16-03-2017--

DONE:

- Followed the tutorial and got the basic functionality.

- Made my own background image and got different images for the monster and the hero.

- Centered the canvas

- Made it so that when the player catches the goblin, the position of the hero does not reset.

--17-03-2017--

DONE:

- Made invisible walls in the bushes

- Made it so that goblins can't spawn in the bushes.

- Now a score is displayed at the top of the screen, instead of monsters Caught. (each green goblin yields 5 points)

- Added a blue Goblin that appears at random and lasts for 3 seconds.

- Added a timer to the points the player gets from the Blue Goblin. The faster it's caught, the more points it yields

- Added a floating text above the Blue Goblins when they are caught.


--18-03-2017--

DONE:

- Added a speed mechanic: Bloodlust. When the player catches enough green goblins, the Bloodlust text will turn red indicating he can use the ability.

	- Bloodlust ability: increases the speed of the Hero for 1 	second

- Added the Bloodlust text art

- Added the Score text Art

- Added instructions picture

- Changed the color of the website's background

- Added more images to create the effect of the Bloodlust Text filling up as the player catches Green Goblins

- Prevented Scrolling with the arrowkeys. (In smaller screens the page scrolls up and down with the player's inputs)
	- Initially this prevented F5 from being used, it's fixed 	now

--19-03-2017--

- Added a Red Goblin that has a small chance to spawn when a green goblin is caught.

- Made the red Goblin chase the hero

- Added lives system. Hero has 3 lives. 

- When red goblin touches the player, 1 life is lost

- Added the art to represent the lives

- Added the art to represent Game Over

- Fixed the reappearing of the red and blue goblin when a green one is caught. (they were already on the screen and after touching a green goblin they would suddenly change places)

- Toned down the speed of the Red Goblin

--20-03-2017--

- Fixed the spawn bug (the red and blu goblins would reappear after catching a green one)

- Started implementing the Quadrant solution for spawning the red goblin away from the player

--21-03-2017--

- Finished implementing the quadrant solution. Now the red goblin spawns away from the player

- Increased the timer of the red Goblin.

- Increased the chance of spawining red goblin.

- Increased the timer of the Blue Goblin.

- Implemented the Reset button funcionality

- Made the Art to be used with the Berserker Rage Mechanic

--23-03-2017--

- Added a Highscore to the Game Over screen that is persistant in the session

- Made the How to Play section of the website much more compreensive and added a bit of flair and lore.

--24-03-2017--

- Added an Upcoming Features to the webpage to display the features that will become available in the future.

- Implemented the Bloodrage system. It has the same effect as Bloodlust: it gives the player speed when used. It has 3 charges and each charge is filled by catching 6 green goblins.

- Implemented the mushroom dropping from the Blue Goblins.

--25-03-2017--

- Berserk mechaninc fully implemented: Blue goblins drop Mushrooms. The player can pick them up and hold 3 of them. Using the mushrooms with the shift key will make the hero invunerable to the red goblins and when it gets in contact with one of them will kill them and get points.

- Mushrooms picked when holding already 3 will give points.

- added the high score to the top left screen

- Added the Bloodrage, Mushroom and Berserk explanations to the How to Play.

- Removed completed features from the Upcoming Features section.

- Added scaling difficulty. The Red Goblin will have greater chance to appear as the player catches green goblins. The time it takes for him to disappear will be longer as the player catches blue goblins. Picking up mushrooms for points (after having 3) and killing Red Goblins will increase his speed. These will increase up to a cap.

--27&28-03-2017--

- Refactored the code: 
	Redid a lot of the variables in a more organized way.
	Placed repeated code in functions

--29-03-2017--

- Added bloodstains when the player kills Goblins. Randomized between 5 different bloodtains to look better. For now there is no limit on the bloodstains on the ground but might be worth tweaking in the future.

--31-03-2017--

- Added visual feedback when the player is hurt by the red goblin. The Hero now flashes red when hit.

--02-04-2017--

- Added a limit of green bloodstains in order not to clutter the screen.

- Adjusted difficulty caps: lowered speed and appear chance. Increased the rate at which the duration modifier and the appear chance are increased.

- Increased the time the hero flashes red when hit by the red goblin, by 50 miliseconds