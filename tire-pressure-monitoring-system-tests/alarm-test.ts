import { expect } from 'chai';
import 'mocha';
import Alarm from '../tire-pressure-monitoring-system/alarm';

describe('Tyre Pressure Monitoring System', () => {

	describe('Alarm', () => {

		context("When the tire pressure is outside the expected range", () => {
			it("Should have alarm activated", () => {
				const psiPressureValue = 16
				const sut = new Alarm(psiPressureValue)

				sut.check()
				
				expect(sut.isAlarmOn()).equal(true)
			})
		})
	});
});
