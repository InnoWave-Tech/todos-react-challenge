import { v4 as createUUID } from 'uuid';

const seed = () => [
  { id: '58aaf682-2a8d-44dd-a0a4-15ead81208f6', title: 'Food shopping', done: false },
  { id: 'e6378ab8-4f8b-4331-bb5b-54cdde84b80e', title: 'Read a book', done: true },
  { id: 'd9cb3631-59ca-4cc5-b903-3a9a4009dfa8', title: 'Pick up parcel', done: false },
];
/**
 * This file simulates our database interaction.
 * Each method returns the Todo list by default.
 */

let db = seed();

export function getTodos() {
  return db;
}

export function createTodo(title) {
  // implement me

  return db;
}

export function toggleDone(id) {
  // implement me

  return db;
}
