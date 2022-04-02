import { Scenarios } from 'data-mocks';

export class MockTodosService {
  getAll() {}

  static todosScenarios: Scenarios = {
    default: [
      {
        url: /todos/,
        method: 'GET',
        response: [
          { label: 'Faire les courses', active: true },
          { label: "Lire l'article sur Medium", active: false },
          { label: 'Aller courir', active: true },
          { label: "Prendre rdv chez l'osteo", active: false },
          { label: 'Finir the last of us 2', active: false },
        ],
        responseCode: 200,
        delay: 2500,
      },
    ],
  };
}
