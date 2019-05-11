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
                'ANSWER' : 'Svar',
                'AUDIO' : 'Ljud',
                'BODY' : 'Kroppen',
                'COMMUNICATE_WHAT_YOU_WANT_TO_SAY_THROUGH_FREE_TEXT' : 'Förmedla det du vill få sagt genom fritext',
                'ENGLISH' : 'Engelska',
                'FREE_TEXT' : 'Fri text',
                'HOME' : 'Hem',
                'KIDS' : 'Barn',
                'LANGUAGE' : 'Språk',
                'NEEDS' : 'Behov',
                'SEND' : 'Skicka',
                'SETTINGS' : 'Inställningar',
                'SWEDISH' : 'Svenska',
                'WANT_TO_KNOW' : 'Vill veta',
                'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS' : 'Med hjälp av denna sida kan du svara på frågor',
                'WRITE_TEXT' : 'Skriv text'
            }
        },
        'eng' : {
            language: 'eng',
            values: {
                'ANSWER' : 'Answer',
                'AUDIO' : 'Audio',
                'BODY' : 'Body',
                'COMMUNICATE_WHAT_YOU_WANT_TO_SAY_THROUGH_FREE_TEXT' : 'Communicate what you want to say through free text',
                'ENGLISH' : 'English',
                'FREE_TEXT' : 'Free text',
                'HOME' : 'Home',
                'KIDS' : 'Kids',
                'LANGUAGE' : 'Language',
                'NEEDS' : 'Needs',
                'SEND' : 'Send',
                'SETTINGS' : 'Settings',
                'SWEDISH' : 'Swedish',
                'WANT_TO_KNOW' : 'Want to know',
                'WITH_THE_HELP_OF_THIS_PAGE_YOU_CAN_ANSWER_QUESTIONS' : 'With the help of this page you can answer questions',
                'WRITE_TEXT' : 'Write text'
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

