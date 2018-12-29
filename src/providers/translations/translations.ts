import { Injectable } from '@angular/core';

export class TranslationSet {
  public language: string;
  public values: {[key: string]: string} = {};
}
@Injectable()
export class TranslationsProvider {

    public languages = ['swe', 'eng'];

    public language = 'swe';

    private dictionary: {[key: string]: TranslationSet} = {
        'swe' : {
            language: 'swe',
            values: {
                'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS' : 'Med hjälp av denna sida kan du svara på frågor'
            }
        },
        'eng' : {
            language: 'eng',
            values: {
                'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS' : 'With the help of this page you can answer questions'
            }
        }
    };

    constructor() {}

    translate(value: string): string {
        if ( this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[value];
        }
    }
}

