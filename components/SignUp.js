import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import Image from 'next/image';
import styles from '../styles/SignUp.module.css';

function SignUp() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  // Redirect to /home if logged in
  const router = useRouter();
  if (user.token) {
    router.push('/');
  }

  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
<<<<<<< HEAD
    fetch('https://k4dw8srbke.eu-west-3.awsapprunner.com/users/signup', {
=======
    fetch('http://13.36.226.130:3000/users/signup', {
>>>>>>> 7df7b8a (port 80 setup)
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, username, password }),
    }).then(response => response.json())
      .then(data => {
        data.result && dispatch(login({ token: data.token, username, firstName }));
      });
  };

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      <h3 className={styles.title}>Create your Hackatweet account</h3>
      <input type="text" className={styles.input} onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Firstname" />
      <input type="text" className={styles.input} onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" />
      <input type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
      <button className={styles.button} onClick={() => handleSubmit()}>Sign up</button>
    </div>
  );
}

export default SignUp;
