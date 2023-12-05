import { http, HttpResponse } from 'msw'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'

const mocks = [
  {
    id: 1,
    titulo: 'FIFA 23',
    plataformas: ['Xbox Series S/X', 'Windows', 'PS5'],
    precoAntigo: 299,
    preco: 190,
    categoria: 'Esportes',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png?w=440&thumb=false'
  },
  {
    id: 2,
    titulo: 'Gotham Knights',
    plataformas: ['Xbox Series S/X', 'PS5', 'Windows'],
    precoAntigo: 299,
    preco: 150,
    categoria: 'Ação',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202204/1422/cXffCEiRPrxFapUs6zxJQp1k.png?w=440&thumb=false'
  },
  {
    id: 3,
    titulo: 'The Witcher 3',
    plataformas: ['Xbox Series S/X', 'PS5', 'Windows'],
    precoAntigo: 349,
    preco: 140.9,
    categoria: 'Ação',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png?w=440&thumb=false'
  },
  {
    id: 4,
    titulo: 'Hogwarts Legacy',
    plataformas: ['PS5', 'Windows'],
    precoAntigo: null,
    preco: 349.9,
    categoria: 'Aventura',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/JmxLZt6exeqcKRz7BSmK8aId.png?w=440&thumb=false'
  },
  {
    id: 5,
    titulo: 'Resident Evil 4',
    plataformas: ['PS5'],
    precoAntigo: null,
    preco: 349.9,
    categoria: 'Ação',
    imagem:
      'https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png?w=440&thumb=false'
  }
]

export const handlers = [
  http.get('http://localhost:4000/produtos', () => {
    return HttpResponse.json(Array.from(mocks.values()))
  })
]

describe('Testes para o container Produtos', () => {
  // beforeAll(() => server.listen)
  // afterEach(() => server.resetHandlers)
  // afterAll(() => server.close)

  test('Deve renderizar corretamente', () => {
    const { debug } = renderizaComProvider(<Produtos />)
    debug()
  })
})
