import tw from 'twin.macro';

const Wrapper = tw.div`relative`;
const DropDownButton = tw.button`relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none`;
const DropDownSVGBase = tw.svg`w-5 h-5 text-gray-800 dark:text-white`;
const DropDownMenu = tw.div`absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800`;
const DropDownItems = tw.a`block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:text-white`;

export const DropDownSVG = ({ items }) => {
  const dropdownItems = items.map((item) => (
    <DropDownItems key={item.id}>{item.name}</DropDownItems>
  ));
  return (
    <Wrapper>
      <DropDownButton>
        <DropDownSVGBase xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </DropDownSVGBase>
        <DropDownMenu>{dropdownItems}</DropDownMenu>
      </DropDownButton>
    </Wrapper>
  );
};
