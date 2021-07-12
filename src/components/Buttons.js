import tw from 'twin.macro';

const ButtonBase = tw.button`rounded-lg bg-red-300 p-3`;

export const Button = ({ text }) => <ButtonBase>{text}</ButtonBase>;
