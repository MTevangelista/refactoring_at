import { expect } from 'chai';
import 'mocha';
import HtmlTextConverter from '../text-converter/html-text-converter'
import TextReader from '../text-converter/text-reader'

describe('Unicode File To Html Text Converter', () => {

	describe('TextReader', () => {

        context("When getFullFilenameWithPath method is called", () => {
            it("Should return corret file name", () => {
                const path = '/Users/matheus.evangelista/Documents/Github/refactoring_at/text-converter-tests/example-text.txt' 

                const sut = new TextReader(path)

                expect(sut.getFullFilenameWithPath()).equal(path)
            })
        })

		context("When getText method is called", () => {
			it("Should return correct text", () => {
				const path = '/Users/matheus.evangelista/Documents/Github/refactoring_at/text-converter-tests/example-text.txt' 
				const string = "I love swift\nI use every day\nSwift is life\nSwift >> objective-c"
		
				const sut = new TextReader(path)
		
				expect(sut.getText()).to.equal(string)
			})
		})
	});
});
