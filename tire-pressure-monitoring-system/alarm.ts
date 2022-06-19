import AlarmConstants from './alarm-constants';
import Sensor from './sensor';

export default class Alarm {
	private highPressureThreshold: number;
	private lowPressureThreshold: number;

	private sensor: Sensor;
	private alarmOn: boolean;

	constructor() {
		/*
			Code Smells: Bloaters - Primitive Obsession
			Refactoring: Organizing Data - Replace magic number with symbolic constant
		*/
		this.lowPressureThreshold = AlarmConstants.lowPressureThreshold;
		this.highPressureThreshold = AlarmConstants.highPressureThreshold;
		this.sensor = new Sensor();
		this.alarmOn = false;
	}

	public check() {
		const psiPressureValue = this.sensor.popNextPressurePsiValue();

		if (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
			this.alarmOn = true;
		}
	}

	public isAlarmOn() {
		return this.alarmOn;
	}

}
