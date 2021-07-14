import tw from 'twin.macro';

const CardBase = tw.div`px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800`;

export const Card = ({ children }) => <CardBase>{children} </CardBase>;
