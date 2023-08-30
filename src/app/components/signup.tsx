'use client';
import Form from '@/app/components/form';
import { useState } from 'react';

export default function SigUp() {
  const [error, setError] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const handleSignin = () => null;
  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error data-testid="error">{error}</Form.Error>}

      <Form.Base onSubmit={handleSignin} method="POST">
        <Form.Input placeholder="First Name" />
        <Form.Input
          placeholder="Email address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <Form.Input
          type="password"
          value={password}
          autoComplete="off"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Form.Submit type="submit" data-testid="sign-in">
          Sign In
        </Form.Submit>
      </Form.Base>
      <Form.Text>
        Already a user? <Form.Link href="/signin">Sign in now.</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        {`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
      </Form.TextSmall>
    </Form>
  );
}
