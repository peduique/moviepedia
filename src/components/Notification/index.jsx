import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notification = (message, type = 'success') => {
  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'center',
      y: 'bottom',
    },
  });

  notyf[type](message);
};

export default notification;
