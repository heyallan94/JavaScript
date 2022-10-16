/*The Western Suburbs Croquet Club has two categories of membership, 
Senior and Open. They would like your help with an application form that will 
tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap 
greater than 7. In this croquet club, handicaps range from -2 to +26; the better 
the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a 
single potential member. Information consists of an integer for the person's age 
and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) 
stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/

function category(age , handicap){
    if(age < 21){
        console.log("You must be older than 21 years")
    }else if(handicap <-2 || handicap > 28){
        console.log("Handicap must be between -2 and 28")
    }else{
        if(age >= 55 && handicap >= 7){
            console.log("Senior")
        }else{
            console.log("Open")
        }
    }
}
const memberJohnAge = 51
const memberJohnHandicap = 6

category(memberJohnAge , memberJohnHandicap)


