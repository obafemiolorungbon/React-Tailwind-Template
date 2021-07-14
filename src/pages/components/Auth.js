import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import logo from './Logo.png';

const CustomLink = tw(Link)`no-underline`;
const Logo = tw.div`flex justify-start items-center space-x-1 w-full`;
const AuthSVGLayout = tw.div`flex flex-col p-4 space-x-1`;
const LogoImage = tw.img`max-w-8 self-center inline-block`;
const LogoText = tw.span`self-center inline-block no-underline px-3 py-px text-xs font-semibold tracking-wider text-gray-700 uppercase rounded-full bg-green-400`;
const Text = tw.p`mb-5 font-sans mt-0 text-xl leading-loose font-bold tracking-tight text-gray-600 sm:text-4xl sm:leading-none`;
export const LogSection = ({ children, text, link }) => (
  <>
    <AuthSVGLayout>
      <CustomLink to={link}>
        <Logo>
          <>
            <LogoImage alt="logo" src={logo} />
            <LogoText>Skynet</LogoText>
          </>
        </Logo>
      </CustomLink>

      <Text>{text}</Text>
      {children}
    </AuthSVGLayout>
  </>
);
// export default LogSection;
