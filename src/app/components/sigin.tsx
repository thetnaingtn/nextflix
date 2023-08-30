'use client';
import Form from '@/app/components/form';
import { useState, startTransition } from 'react';

export default function Sigin({
  signIn,
}: {
  signIn: (email: string, password: string) => Promise<void>;
}) {
  const [error, setError] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const handleSignin = () => null;
  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error data-testid="error">{error}</Form.Error>}

      <Form.Base
        onSubmit={() => {
          startTransition(() => {
            signIn(emailAddress, password);
          });
        }}
        method="POST"
      >
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
        New to Netflix? <Form.Link href="/signup">Sign up now.</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        {`This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`}
      </Form.TextSmall>
    </Form>
  );
}
