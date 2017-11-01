import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

    // Method that takes and a character to replace with space
    // Returns a string
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}
