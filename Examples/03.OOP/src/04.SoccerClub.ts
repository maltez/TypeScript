abstract class SoccerClub  {
    public players: string[];

    constructor(players: string[]){
        this.players = players;
    }

    abstract tour(money: number):void;
}

class UkrainianClub extends SoccerClub{
    private hookers: string[] = [];

    public get Hookers(): string[] {
        if (this.hookers.length === 0) {
            return ['Petrenko'];
        } else {
            return this.hookers;
        }
    }

    public set Hookers(value: string[]){
        value.forEach(n => this.hookers.push(n));
    }

    tour(money: number): void {
        console.log(`${this.players.join(', ')} goes to tour with booze, women and ${money} bucks.`)
    }
}

const metalurg = new UkrainianClub(['Ivanov', 'Petrov', 'Sidorov']);
console.log(metalurg.Hookers);
metalurg.Hookers = ['Anna', 'Angelika', 'Hermiona'];
console.log(metalurg.Hookers);
metalurg.tour(1000000);