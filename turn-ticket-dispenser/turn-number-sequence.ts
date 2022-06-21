export default interface ITurnNumberSequence {
    getNextTurnNumber(): number
}

export default class TurnNumberSequence implements ITurnNumberSequence {
	private turnNumber: number;

	constructor(turnNumber: number = 0) {
		this.turnNumber = turnNumber
	}

	public getNextTurnNumber() {
		return this.turnNumber++;
	}
}