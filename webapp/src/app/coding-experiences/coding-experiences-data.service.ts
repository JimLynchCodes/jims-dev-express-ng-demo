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
];

@Injectable()
export class CodingExperiencesDataService {
    getPopulationData(): Population[] {
        return populationData;
    }
}
