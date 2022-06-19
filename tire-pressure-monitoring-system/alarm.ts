import AlarmConstants from './alarm-constants';

export default class Alarm {
	private highPressureThreshold: number;
	private lowPressureThreshold: number;
	private psiPressureValue: number
	private alarmOn: boolean;

	/*
		Code Smells: Improper Instantiation and High Coupling
		Refactoring: Design Pattern (DI) - Dependency Injection
	*/
	/*
		Code Smells: Bloaters - Primitive Obsession
		Refactoring: Organizing Data - Replace magic number with symbolic constant
	*/
	constructor(
		psiPressureValue: number,
		lowPressureThreshold: number = AlarmConstants.lowPressureThreshold,
		highPressureThreshold: number = AlarmConstants.highPressureThreshold
	) {
		this.lowPressureThreshold = lowPressureThreshold
		this.highPressureThreshold = highPressureThreshold
		this.psiPressureValue = psiPressureValue
		this.alarmOn = false;
	}

	public check() {
		if (this.psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < this.psiPressureValue) {
			this.alarmOn = true;
		}
	}

	public isAlarmOn() {
		return this.alarmOn;
	}
}
