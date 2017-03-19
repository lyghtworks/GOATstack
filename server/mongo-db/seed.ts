/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
import User from './api/user/user.model';
import Wonder from './api/wonder/wonder.model';

export default function seed(env?: string): void {

  Wonder.find({}).remove().then(() => {
    Wonder.create(
      {
        name: 'SocketIO',
        xcoor: 52,
        ycoor: 15
      }, {
        name: 'MongoDB',
        xcoor: 35,
        ycoor: 35
      }, {
        name: 'Angular 2',
        xcoor: 10,
        ycoor: 65
      }, {
        name: 'Karma',
        xcoor: 16,
        ycoor: 40
      }, {
        name: 'Express',
        xcoor: 58,
        ycoor: 50
      }, {
        name: 'Jasmine',
        xcoor: 75,
        ycoor: 55
      }, {
        name: 'OAuth',
        xcoor: 40,
        ycoor: 60  
      }, {
        name: 'Node',
        xcoor: 5,
        ycoor: 15
      }, {
        name: 'Redux',
        xcoor: 70,
        ycoor: 20
      }, {
        name: 'Protractor',
        xcoor: 26,
        ycoor: 15
      });
  });

  // Insert seeds below
  switch (env) {
    case "development":
      User.find({}).remove().then(() => {
        User.create({
          username: 'AdMiN',
          firstname: 'admin',
          lastname: 'admin',
          email: 'admin@admin.com',
          password: 'admin1'
        }, {
          username: 'test',
          firstname: 'testFirst',
          lastname: 'testLast',
          email: 'test@test.com',
          password: 'test'
        });
      }).catch(error => console.log(error));
      break;
    case "test":
      User.find({}).remove().then(() => {
        User.create({
          username: 'test',
          firstname: 'testFirst',
          lastname: 'testLast',
          email: 'test@test.com',
          password: 'test'
        });
      }).catch(error => console.log(error));      
      break;
    default:
    User.find({}).remove().then(() => {
      User.create({
        username: 'AdMiN',
        firstname: 'admin',
        lastname: 'admin',
        email: 'admin@admin.com',
        password: 'admin1'
      }, {
        username: 'test',
        firstname: 'testFirst',
        lastname: 'testLast',
        email: 'test@test.com',
        password: 'test'
      }, {
          username: 'test',
          firstname: 'testFirst',
          lastname: 'testLast',
          email: 'test@test.com',
          password: 'test'
        });
    }).catch(error => console.log(error));
      break;
  }

}
