import { Injectable } from '@angular/core';

export class Population {
  "year": string;
  "webDevelopment": number;
  "javascript": number;
  "angular": number;
}

const populationData: Population[] = [
{
    year: '2012',
    webDevelopment: 0,
    javascript: 0,
    angular: 0,
},
{
    year: '2013',
    webDevelopment: 0,
    javascript: 0,
    angular: 0,
},
{
    year: '2014',
    webDevelopment: 1,
    javascript: 0,
    angular: 0,
},
{
    year: '2015',
    webDevelopment: 2,
    javascript: 0,
    angular: 0,
},
{
    year: '2016',
    webDevelopment: 3,
    javascript: 1,
    angular: 0,
},
{
    year: '2017',
    webDevelopment: 4,
    javascript: 2,
    angular: 1,
},
{
    year: '2018',
    webDevelopment: 5,
    javascript: 3,
    angular: 2,
},
{
    year: '2019',
    webDevelopment: 6,
    javascript: 4,
    angular: 3,
},
{
    year: '2020',
    webDevelopment: 7,
    javascript: 5,
    angular: 3,
},
{
    year: '2021',
    webDevelopment: 8,
    javascript: 6,
    angular: 4,
},
{
    year: '2022',
    webDevelopment: 9,
    javascript: 7,
    angular: 5,
},
{
    year: '2023',
    webDevelopment: 10,
    javascript: 8,
    angular: 5,
}
// {
//     programmingLanguage: '1',
//     actionscript3: 1,
//     javascript: 0,
//     cloudaws: 0,
//     angular: 0,
//     tdd: 0,
//     rust: 0 
// },
// {
//     programmingLanguage: '2',
//     actionscript3: 1,
//     javascript: 0,
//     cloudaws: 1,
//     angular: 0,
//     tdd: 0,
//     rust: 0 
// },
// {
//     programmingLanguage: '3',
//     actionscript3: 2,
//     javascript: 2,
//     cloudaws: 1,
//     angular: 0,
//     tdd: 1,
//     rust: 0 
// },
// {
//     programmingLanguage: '4',
//     actionscript3: 2,
//     javascript: 3,
//     cloudaws: 1,
//     angular: 1,
//     tdd: 1,
//     rust: 0 
// },
// {
//     programmingLanguage: '5',
//     actionscript3: 2,
//     javascript: 4,
//     cloudaws: 2,
//     angular: 2,
//     tdd: 3,
//     rust: 0 
// },
// {
//     programmingLanguage: '6',
//     actionscript3: 2,
//     javascript: 5,
//     cloudaws: 3,
//     angular: 2,
//     tdd: 3,
//     rust: 0 
// },
// {
//     programmingLanguage: '7',
//     actionscript3: 2,
//     javascript: 6,
//     cloudaws: 4,
//     angular: 3,
//     tdd: 4,
//     rust: 0 
// },
// {
//     programmingLanguage: '8',
//     actionscript3: 2,
//     javascript: 7,
//     cloudaws: 4,
//     angular: 4,
//     tdd: 5,
//     rust: 1
// },
// {
//     programmingLanguage: '9',
//     actionscript3: 2,
//     javascript: 8,
//     cloudaws: 5,
//     angular: 4,
//     tdd: 6,
//     rust: 0 
// },
// {
//     programmingLanguage: '10',
//     actionscript3: 2,
//     javascript: 9,
//     cloudaws: 6,
//     angular: 5,
//     tdd: 7,
//     rust: 2 
// }
];

@Injectable()
export class CodingExperiencesDataService {
  getPopulationData(): Population[] {
    return populationData;
  }
}
