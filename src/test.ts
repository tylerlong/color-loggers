import { Blue, Green, Red } from './index';

const info = new Blue();
const success = new Green();
const error = new Red();

info.log('This is an information.');
success.log('Congratulations!');
error.log('Something is wrong!');

const info2 = new Blue('👉');
const success2 = new Green('🎉');
const error2 = new Red('⛔️');

info2.log('This is an information.');
success2.log('Congratulations!');
error2.log('Something is wrong!');

const info3 = new Blue(() => `[${new Date()}]:`);
info3.log('This is an information.');
