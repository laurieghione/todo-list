import { Scenarios } from 'data-mocks';

export class MockTodosService {
  getAll() {}

  static todosScenarios: Scenarios = {
    default: [
      {
        url: /todos/,
        method: 'GET',
        response: [
          { id: 1, label: 'Faire les courses', description: 'Jambon, Fromage, Pain, Oeuf', active: true },
          { id: 2, label: "Lire l'article sur Medium", active: false },
          { id: 3, label: 'Aller courir', description: '30/30 VMA  + 20m récup', active: true },
          { id: 4, label: "Prendre rdv chez l'osteo", active: false },
          { id: 5, label: 'Finir the last of us 2', active: false },
        ],
        responseCode: 200,
        delay: 1500,
      },
    ],
  };
}
