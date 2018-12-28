import { Pipe, PipeTransform } from '@angular/core';
import { TranslationsProvider } from '../../providers/translations/translations';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

    constructor(private translationService: TranslationsProvider) {}

  transform(value: any, args?: any): any {
     return this.translationService.translate(value);
  }
}
