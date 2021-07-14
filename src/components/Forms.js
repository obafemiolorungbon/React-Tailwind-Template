import tw from 'twin.macro';

const InputBase = tw.input`appearance-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;

export const Input = ({ ...props }) => <InputBase {...props} />;
export const RememberMe = ({ ...props }) => (
  <div className="flex items-center">
    <input
      {...props}
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="h-4 w-4 bg-green-500 focus:ring-green-500 border-gray-300 rounded"
    />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
      Remember me
    </label>
  </div>
);
