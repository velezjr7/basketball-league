import { Round } from '../types';

export const SCHEDULE: Round[] = [
  {
    id: 'r1',
    name: 'Jornada 1',
    matches: [
      { id: 'm1-1', homeTeamId: 't1', awayTeamId: 't2', homeScore: 88, awayScore: 82, isPlayed: true, date: '2023-10-01', time: '18:00', location: 'Gimnasio Central' },
      { id: 'm1-2', homeTeamId: 't3', awayTeamId: 't4', homeScore: 75, awayScore: 79, isPlayed: true, date: '2023-10-01', time: '19:30', location: 'Gimnasio Central' },
      { id: 'm1-3', homeTeamId: 't5', awayTeamId: 't6', homeScore: 92, awayScore: 68, isPlayed: true, date: '2023-10-01', time: '21:00', location: 'Gimnasio Norte' },
      { id: 'm1-4', homeTeamId: 't7', awayTeamId: 't8', homeScore: 101, awayScore: 98, isPlayed: true, date: '2023-10-02', time: '18:00', location: 'Gimnasio Central' },
      { id: 'm1-5', homeTeamId: 't9', awayTeamId: 't10', homeScore: 65, awayScore: 70, isPlayed: true, date: '2023-10-02', time: '19:30', location: 'Gimnasio Central' },
      // Team 11 rests
    ]
  },
  {
    id: 'r2',
    name: 'Jornada 2',
    matches: [
      { id: 'm2-1', homeTeamId: 't11', awayTeamId: 't1', homeScore: 85, awayScore: 90, isPlayed: true, date: '2023-10-08', time: '18:00', location: 'Gimnasio Central' },
      { id: 'm2-2', homeTeamId: 't2', awayTeamId: 't3', homeScore: 78, awayScore: 88, isPlayed: true, date: '2023-10-08', time: '19:30', location: 'Gimnasio Central' },
      { id: 'm2-3', homeTeamId: 't4', awayTeamId: 't5', homeScore: 110, awayScore: 105, isPlayed: true, date: '2023-10-08', time: '21:00', location: 'Gimnasio Norte' },
      { id: 'm2-4', homeTeamId: 't6', awayTeamId: 't7', homeScore: 70, awayScore: 72, isPlayed: true, date: '2023-10-09', time: '18:00', location: 'Gimnasio Central' },
      { id: 'm2-5', homeTeamId: 't8', awayTeamId: 't9', homeScore: 82, awayScore: 80, isPlayed: true, date: '2023-10-09', time: '19:30', location: 'Gimnasio Central' },
      // Team 10 rests
    ]
  },
  {
    id: 'r3',
    name: 'Jornada 3',
    matches: [
      { id: 'm3-1', homeTeamId: 't10', awayTeamId: 't11', isPlayed: false, date: '2023-10-15', time: '18:00', location: 'Gimnasio Central' },
      { id: 'm3-2', homeTeamId: 't1', awayTeamId: 't3', isPlayed: false, date: '2023-10-15', time: '19:30', location: 'Gimnasio Central' },
      { id: 'm3-3', homeTeamId: 't2', awayTeamId: 't5', isPlayed: false, date: '2023-10-15', time: '21:00', location: 'Gimnasio Norte' },
      { id: 'm3-4', homeTeamId: 't4', awayTeamId: 't7', isPlayed: false, date: '2023-10-16', time: '18:00', location: 'Gimnasio Central' },
      { id: 'm3-5', homeTeamId: 't6', awayTeamId: 't9', isPlayed: false, date: '2023-10-16', time: '19:30', location: 'Gimnasio Central' },
      // Team 8 rests
    ]
  }
];