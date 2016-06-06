##WHAT
Is a simple app to match symptons with possible diseases. The app is done by @RichAWarren, @heatherlauren, @sofiapoh and @TroyMaeder.

##HOW
Users will be presennted with six check boxes which corrolate to a symptom. User should tick three boxes to get a disease after pressing submit. Disease will be displayed in a modul box. If more or less than the three an error message will be displayed.
On pressing submit, function will check every checkbox to see if checked. If yes, symptom name will be pushed into an array. Array will be sorted and then .join(" ") and compare with indexOf with an array of disease symptom combinations. This index will be checked against another corresponding array of disease names. Result will be pushed to a modal box.
If less than or greater than 3 boxes are checked an error message with be pushed to the modal box (using a count variable).

##STRETCH GOALS
Allow different number of selections and account for zero selections.
