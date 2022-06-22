import { readFileSync } from 'fs'

/*
	Code Smells: Directly accessing a private field within a class is not flexible enough
	Refactoring: Organizing Data - Self encapsulate field
*/
export default interface ITextReader {
    getFullFilenameWithPath(): string
    getText(): string
}

export default class TextReader {
    private fullFilenameWithPath: string;

    constructor(fullFilenameWithPath: string) {
		this.fullFilenameWithPath = fullFilenameWithPath;
	}

    public getFullFilenameWithPath(): string {
        return this.fullFilenameWithPath
    }

    public getText(): string {
        return readFileSync(this.getFullFilenameWithPath()).toString(); 
    }
}