import {Logger} from 'Logger.js';
import {Movie} from 'Movie.js';
import {Actor} from 'Actor.js';

var social = {
    share: share,
    like: like
};

function share(friendName) {
    let log = new Logger();
    console.log('Name: ' + friendName + '\n' + 'Shared movie: ' + this.title);
}

function like(friendName) {
    let log = new Logger();
    console.log('Name: ' + friendName + '\n' + 'Likes: ' + this.title);
}

var logger = new Logger();

const iron_man = new Movie('Iron Man', 2008, 126),
    tony_stark = new Actor('Tony Stark', 53);
Object.assign(iron_man, social);
iron_man.addCast(tony_stark);
iron_man.on("play", logger.log);

const the_godfather = new Movie('The Godfather', 1972, 178),
    al_pacino = new Actor('Al Pacino', 78);
Object.assign(the_godfather, social);
the_godfather.addCast(al_pacino);
the_godfather.on("play", logger.log);

const actors = [
    new Actor('Jim Carrey', 56),
    new Actor('Adam Sandler', 51),
    new Actor('Jennifer Aniston', 49)
];

const bruce_almighty = new Movie('Bruce Almighty', 2003, 101);
Object.assign(bruce_almighty, social);
bruce_almighty.addCast(actors[0]);
bruce_almighty.on("play", logger.log);

const click = new Movie('Click', 2006, 107);
Object.assign(click, social);
click.addCast(actors[1]);
click.on("play", logger.log);

const the_break_up = new Movie('The Break-Up', 2006, 106);
Object.assign(the_break_up, social);
the_break_up.addCast(actors[2]);
the_break_up.on("play", logger.log);
