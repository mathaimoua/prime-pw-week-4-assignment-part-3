console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; // global variable
const maxItems = 5;

function addItem( item ){
    if ( basket.length >= maxItems ){
        return false;
    }
    else {
        basket.push(item);
        return true;
    }
}
// Test addItem
console.log( 'Testing addItem, adding "Bread" to basket, should return True:',
    addItem( "Bread" ));
console.log( 'Testing addItem, adding "Chocolate" to basket, should return True:',
    addItem( "Chocolate" ));

function listItems(){
    for ( let item of basket ){
        console.log( item );
    }
}
// Test listItem
console.log( 'Testing listItems, should display each item in basket:');
listItems();
//console.log( 'Displaying basket:', `${basket}`);

function empty(){
    basket = [];
}
// Test empty
empty();
console.log( 'Testing the empty function, should display "[]":', 
    basket);

function isFull(){
    if ( basket.length >= maxItems ){
        return true;
    }
    else {
        return false;
    }
}
// Test isFull
console.log( 'Showing items in basket using listItems:', listItems());
console.log( 'Testing isFull, returning True if full. Should return False:', isFull());
addItem( 'Forks' );
addItem( 'Syrup' );
addItem( 'Cereal' );
addItem( 'Bread' );
addItem( 'Chocolate' );
console.log( 'Testing isFull, returning True if full. Should return True now:', isFull());

function removeItem( item ){
    let removed;
    for ( let x of basket ){
        if ( x === item ){
            removed = item;
            basket.splice(basket.indexOf(x), 1);
            // console.log( 'Removed:', removed);
        }
    }
    return removed;
}

console.log( 'Testing removeItem by removing "Nuts", should return undefined:', removeItem( 'Nuts' ));
console.log( 'Testing removeItem below by removing "Bread":');
console.log( 'Basket before:', basket );
removeItem ( 'Bread' );
console.log( 'Basket after:', basket );