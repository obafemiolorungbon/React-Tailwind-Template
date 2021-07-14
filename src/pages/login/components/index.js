import { LoginSVG } from 'assets/svgs';
import tw from 'twin.macro';
import { LogSection } from 'pages/components/Auth';
import { LoginForm } from './Form';

const Layout = tw.div`w-full md:flex md:flex-row lg:flex lg:flex-row flex flex-col`;
const Sides = tw.div`w-auto md:w-1/2 lg:w-2/3 p-4 flex flex-col justify-center items-center`;
// eslint-disable-next-line arrow-body-style
const LoginScreen = () => {
  return (
    <Layout>
      <Sides>
        <LogSection text="Get Things done faster, efficiently" link="/auth/login">
          <LoginSVG />
        </LogSection>
      </Sides>
      <Sides>
        <LoginForm />
      </Sides>
    </Layout>
  );
};

export default LoginScreen;
