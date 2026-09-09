import '@testing-library/jest-dom/vitest';

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { RawCountriesResponse } from './mocks/countries';

export const restHandlers = [
  http.get('https://cdn.jsdelivr.net/gh/mledoze/countries@master/dist/countries.json', () => {
    return HttpResponse.json(RawCountriesResponse);
  }),
];
const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
