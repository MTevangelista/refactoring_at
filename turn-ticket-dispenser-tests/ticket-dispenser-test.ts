import { expect } from 'chai';
import 'mocha';
import TicketDispenser from '../turn-ticket-dispenser/ticket-dispenser';
import ITurnNumberSequence from '../turn-ticket-dispenser/turn-number-sequence';
import TurnNumberSequence from '../turn-ticket-dispenser/turn-number-sequence'

describe('Turn Ticket Dispenser', () => {

	describe('TurnTicketDispenser', () => {

		context("When one dispenser is used", () => {
			it('Should have new ticket number greater than previous ticket number', () => {
				const turnNumberSequence: ITurnNumberSequence = new TurnNumberSequence()
				const ticketDispenser = new TicketDispenser(turnNumberSequence)
		
				const previousTicket = ticketDispenser.getTurnTicket()
				const previousTicketNumber = previousTicket.getTurnNumber()
				const newTicket = ticketDispenser.getTurnTicket()
				const newTicketNumber = newTicket.getTurnNumber()
		
				expect(newTicketNumber).to.greaterThan(previousTicketNumber)
			})
		})

		context("When two dispenser is used", () => {
			it('Should have new ticket number still greater than previous ticket number', () => {
				const turnNumberSequence: ITurnNumberSequence = new TurnNumberSequence()
		
				const ticketDispenser = new TicketDispenser(turnNumberSequence)
				const previousTicket = ticketDispenser.getTurnTicket()
				const previousTicketNumber = previousTicket.getTurnNumber()
		
				const secondTicketDispenser = new TicketDispenser(turnNumberSequence)
				const newTicket = secondTicketDispenser.getTurnTicket()
				const newTicketNumber = newTicket.getTurnNumber()
		
				expect(newTicketNumber).to.greaterThan(previousTicketNumber)
			})
		})
	});
});
