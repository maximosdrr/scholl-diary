import * as request from 'supertest';

describe('AppController (e2e)', () => {
  const app = 'http://localhost:3000/auth/';
  let token: string;
  let id: string;

  it('/ (POST) New user', () => {
    const user = {
      name: 'Jhon Wick',
      username: 'jWick',
      password: 'helen<3',
    };

    return request(app)
      .post('insert')
      .send(user)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body.identifiers[0].id).toBeDefined();
        id = body.identifiers[0].id;
        console.log(id);
      });
  });

  it('/ (GET) Login', () => {
    const credentials = {
      username: 'jWick',
      password: 'helen<3',
    };

    return request(app)
      .post('login')
      .send(credentials)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body.accessToken).toBeDefined();
        token = body.accessToken;
        console.log(token);
      });
  });

  it('Decode user', () => {
    return request(app)
      .get('getProfile')
      .set({ Authorization: `Bearer ${token}` })
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body.id).toEqual(id);
        expect(body.username).toEqual('jWick');
      });
  });

  it('Delete user', () => {
    return request(app)
      .delete('delete')
      .set({ Authorization: `Bearer ${token}` })
      .expect(200)
      .expect(({ body }) => {
        expect(body).toBeDefined();
        expect(body.raw.affectedRows).toEqual(1);
      });
  });
});
