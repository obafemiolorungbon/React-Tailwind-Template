import { NormalButton, Input, RememberMe, Loading } from 'components';
import { useState } from 'react';
import tw from 'twin.macro';

const WelcomeBackText = tw.h2`max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight text-green-400 sm:text-4xl sm:leading-none md:mb-3`;
const FormContainer = tw.div`flex flex-col gap-4 w-full`;
const LoginText = tw.div``;
export const LoginForm = () => {
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    console.log('Button Clicked to Submit');
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <FormContainer>
      <WelcomeBackText>Welcome back,</WelcomeBackText>
      <Input id="email" name="email" type="text" placeholder="sample@gmail.com" />
      <Input
        onChange={getPassword}
        id="password"
        name="password"
        type="password"
        placeholder="*********"
      />
      <RememberMe />
      {loading ? <Loading text="Loading" /> : <NormalButton onClick={handleSubmit} text="Login" />}
    </FormContainer>
  );
};
