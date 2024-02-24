let Guest_List :string[] = ['Nawaz Sharif','Imran Khan','Bilawal Bhutto'] ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }
let absent_Guest :string = 'Imran Khan' ;  
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[1] = new_Guest ;
// for(let i=1; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')

// }
// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find big table so we are inviting 3 more guests.')
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Asif Ali Zardari');

// for(let i=1; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }

// console.log('\nSorry we can not arrange big table,only two peoples will be invited.');

while(Guest_List.length > 2){
  let remove_Guest = Guest_List.pop();
// console.log(`Sorry Mr. ${remove_Guest}, You are not invited for dinner`);
}

// for(let i=1; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited. \n\nThank You!\n\n')
// }

Guest_List.splice(0, 2);
console.log(Guest_List);

// Exercise 19
console.log(`Total numbet of guest are : ${Guest_List.length}`);