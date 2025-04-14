const request = require('supertest')

const app = require('../server')


jest.mock('axios')



describe('Air Quality API', () => {
      it('should return air quality data for given coordinates', async () => {
        const mockResponse = {
          data: {
            data: {
              city: 'Paris',
              current: {
                pollution: {
                  ts: '2023-05-15T12:00:00.000Z',
                  aqius: 45,
                  mainus: 'p2',
                  aqicn: 25,
                  maincn: 'p2'
                }
              }
            }
          }
        };
        
        
        const response = await request(app)
          .get('/api/air-quality')
          .query({ lat: '48.856613' , long: '2.352222' });

        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({
          Result: {
            Pollution: mockResponse.data.data.current.pollution
          }
        });
      });
      
      it('should return 400 if coordinates are missing', async () => {
        const response = await request(app)
          .get('/api/air-quality');
        
        expect(response.statusCode).toBe(400);
      });
  });
  