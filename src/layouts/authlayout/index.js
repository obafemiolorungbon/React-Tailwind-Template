import { LargeCard } from 'components';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';

const Container = tw.div`w-full h-screen bg-white md:bg-gray-500 lg:bg-gray-700 flex justify-center items-center`;
const AuthCard = tw(LargeCard)`w-full`;
const AuthLayout = () => (
  <Container>
    <AuthCard>
      <Outlet />
    </AuthCard>
  </Container>
);

export default AuthLayout;
