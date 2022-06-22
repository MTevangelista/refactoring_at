import IFileHelper from "./text-reader";

/*
	Code Smells: High Coupling (God class)
	Refactoring: Design Pattern (DI) - Dependency Injection
*/
/*
	Code Smells: Depend on an implementation rather than an abstraction
	Refactoring: SOLID Principle - Dependency Inversion Principle (DIP)
*/
/*
	Code Smells: Bloaters - Long method
	Refactoring: Composing Method - Extract Method
*/

export default class HtmlTextConverter {
	private fileHelper: IFileHelper
	private html: string[]
	private convertedLine: string[] 

	constructor(fileHelper: IFileHelper, html: string[] = [], convertedLine: string[] = []) {
		this.fileHelper = fileHelper
		this.html = html
		this.convertedLine = convertedLine
	}

	private stashNextCharacterAndAdvanceThePointer(text: string, index: number): string {
		const c = text.charAt(index);
		index += 1;
		return c;
	}

	private addANewLine() {
		const line = this.convertedLine.join('');
		this.html.push(line);
		this.convertedLine = [];
	}

	private pushACharacterToTheOutput(value: string) {
		this.convertedLine.push(value);
	}

	private handleConvertCharacter(characterToConvert: string) {
		switch (characterToConvert) {
			case '<':
				this.convertedLine.push('&lt;');
				break;
			case '>':
				this.convertedLine.push('&gt;');
				break;
			case '&':
				this.convertedLine.push('&amp;');
				break;
			case '\n':
				this.addANewLine();
				break;
			default:
				this.pushACharacterToTheOutput(characterToConvert);
		}
	}

	public convertToHtml(): string {
		const text = this.fileHelper.getText()
		let index = 0;
		let characterToConvert = this.stashNextCharacterAndAdvanceThePointer(text, index);

		while (index <= text.length) {
			this.handleConvertCharacter(characterToConvert)
			characterToConvert = this.stashNextCharacterAndAdvanceThePointer(text, index);
		}

		this.addANewLine();
		return this.html.join('<br />');
	}
}
