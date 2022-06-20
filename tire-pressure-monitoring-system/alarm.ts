import AlarmConstants from './alarm-constants';

/*
	Code Smells: Improper Instantiation and High Coupling
	Refactoring: Design Pattern (DI) - Dependency Injection
*/
/*
	Code Smells: Bloaters - Primitive Obsession
	Refactoring: Organizing Data - Replace magic number with symbolic constant
*/
/*
	Code Smells: directly accessing a private field within a class is not flexible enough
	Refactoring: Organizing Data - Self encapsulate field
*/
export default class Alarm {
	private highPressureThreshold: number;
	private lowPressureThreshold: number;
	private psiPressureValue: number
	private alarmOn: boolean;

	constructor(
		psiPressureValue: number,
		lowPressureThreshold: number = AlarmConstants.lowPressureThreshold,
		highPressureThreshold: number = AlarmConstants.highPressureThreshold,
	) {
		this.lowPressureThreshold = lowPressureThreshold
		this.highPressureThreshold = highPressureThreshold
		this.psiPressureValue = psiPressureValue
		this.alarmOn = false
	}

	public getAlarmOn() {
		return this.alarmOn;
	}

	public setAlarmOn(value: boolean) {
		this.alarmOn = value
	}

	public getPsiPressureValue(): number {
		return this.psiPressureValue
	}

	public getLowPressureThreshold(): number {
		return this.lowPressureThreshold
	}

	public getHightPressureThreshold(): number {
		return this.highPressureThreshold
	}

	public check() {
		if (this.getPsiPressureValue() < this.getLowPressureThreshold() || this.getHightPressureThreshold() < this.getPsiPressureValue()) {
			this.setAlarmOn(true)
		}
	}
}
