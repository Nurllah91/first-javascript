
const friends = ["rohim", "korim", "sahabuddin", "opu", "rimon"];

function bestFriend(friendsName){
    let largestNameFriends = friendsName[0];
    for(let i =0; i < friendsName.length; i++){
       
        if(friendsName[i].length > largestNameFriends.length )
        largestNameFriends = friendsName[i];
    }
    return largestNameFriends;
}

const largestNameFriend = bestFriend(friends)
console.log(largestNameFriend);