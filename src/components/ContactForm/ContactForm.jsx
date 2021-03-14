import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const ContactForm = function ({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(name, number);
    resetState();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.labelName}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={styles.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button
        className={styles.btn}
        type="submit"
        disabled={!(name && number) && true}
      >
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;

//  CLASS

// class ContactForm extends Component {
//   static propTypes = {
//     name: PropTypes.string,
//     number: PropTypes.string,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);
//     this.resetState();
//   };

//   resetState = () => this.setState({ name: '', number: '' });

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={styles.form} onSubmit={this.handleSubmit}>
//         <label className={styles.labelName}>
//           Name
//           <input
//             className={styles.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             className={styles.input}
//             type="text"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button
//           className={styles.btn}
//           type="submit"
//           disabled={!(name && number) && true}
//         >
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
