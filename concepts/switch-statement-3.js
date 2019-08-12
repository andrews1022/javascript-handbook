// Inside the ( ), we evaluate that, in this case what the color is
// To evaluate it, we use 'cases'
// Default statement - if it does not match any of the above+

// Switch statement for practice/fun:
function yourCar(car) {
    var judgement;
    switch (car) {
        case 'Bugatti':
            judgement = 'Wow! Your car is the king!!!';
            break;
        case 'Ferrari':
            judgement = 'Wow! Your car is amazing!!';
            break;
        case 'Audi':
            judgement = 'Wow! Your car is really nice!';
            break;
        case 'Lexus':
            judgement = 'Wow! Your car is pretty good.';
            break;
        case 'Ford':
            judgement = 'Wow! Your car is...it could be better.';
            break;
        default:
            judgement = 'Wow! Don\'t talk to me unless you got them 4 wheels, son.';
    }
    return judgement;
}

yourCar('Bugatti');
yourCar('Ferrari');
yourCar('Audi');
yourCar('Lexus');
yourCar('Ford');