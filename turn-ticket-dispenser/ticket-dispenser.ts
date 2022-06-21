import ITurnNumberSequence from './turn-number-sequence';
import TurnTicket from './turn-ticket';

/*
	Code Smells: Improper Instantiation and High Coupling
	Refactoring: Design Pattern (DI) - Dependency Injection
*/
/*
	Code Smells: Depend on an implementation rather than an abstraction
	Refactoring: SOLID Principle - Dependency Inversion Principle (DIP)
*/
export default class TicketDispenser {
    private turnNumberSequence: ITurnNumberSequence

    constructor(turnNumberSequence: ITurnNumberSequence) {
        this.turnNumberSequence = turnNumberSequence
    }

    public getTurnTicket() {
        const newTurnNumber = this.turnNumberSequence.getNextTurnNumber()
        const newTurnTicket = new TurnTicket(newTurnNumber)

        return newTurnTicket
    }
}
