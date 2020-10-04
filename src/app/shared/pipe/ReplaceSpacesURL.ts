import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'replaceSpacesURL'})
export class ReplaceSpacesURL implements PipeTransform {
  transform(value: string): string {
    return value.replace(' ', '%20');
  }
}