import { Injectable } from '@angular/core';
import { Languages } from '../../assets/enums/language';

export class TranslationSet {
  public language: string;
  public values: {[key: string]: string} = {};
}
@Injectable()
export class TranslationsProvider {

    public languages = ['swe', 'eng'];

    public language: Languages = Languages.swe;

    private dictionary: {[key: string]: TranslationSet} = {
        'swe' : {
            language: 'swe',
            values: {
                'ENGLISH' : 'Engelska',
                'LANGUAGE' : 'Språk',
                'SWEDISH' : 'Svenska',
                'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS' : 'Med hjälp av denna sida kan du svara på frågor'
            }
        },
        'eng' : {
            language: 'eng',
            values: {
                'ENGLISH' : 'English',
                'LANGUAGE' : 'Language',
                'SWEDISH' : 'Swedish',
                'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS' : 'With the help of this page you can answer questions'
            }
        }
    };

    constructor() {console.log(this.language)}

    translate(value: string): string {
        if ( this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[value];
        }
    }

    switchLanguage(language: Languages) {
        this.language = language;
    }
}

