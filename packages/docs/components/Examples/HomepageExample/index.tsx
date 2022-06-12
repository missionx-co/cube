import {
  Button,
  Checkbox,
  Combobox,
  FormControl,
  Input,
} from '@cube-ui/components';
import { FC, useState } from 'react';

interface IHomepageExample {
  exampleCode: string;
}

const HomepageExample: FC<IHomepageExample> = ({ exampleCode }) => {
  const [showCode, toggleCode] = useState(false);

  return (
    <div className="lg:w-1/2 flex-col w-full space-y-5">
      <Button onClick={() => toggleCode(!showCode)} variant="outline">
        {showCode ? 'Show me the code result' : 'Show me some code'}
      </Button>
      {showCode === false && (
        <div className="bordar-gray-200 w-full p-4 space-y-5 border border-gray-200 rounded-lg">
          <h1 className="text-lg font-medium">Example Signup Form</h1>
          <FormControl id="name" fieldLabel="name">
            <Input id="name" name="name" placeholder="Mohammed Manssour" />
          </FormControl>

          <FormControl
            id="email"
            fieldLabel="Email"
            error="Please enter valid email"
          >
            <Input
              id="email"
              name="email"
              placeholder="hello@mohammedmanssour.me"
            />
          </FormControl>
          <FormControl
            id="password"
            fieldLabel="Password"
            hint="Password must be 8 charachters at least."
          >
            <Input id="password" name="password" type="password" />
          </FormControl>
          <FormControl id="Timezone" fieldLabel="Timezone">
            <Combobox
              placeholder="Type to find your timezone"
              options={(searchQuery: string) =>
                Promise.resolve(
                  [
                    {
                      value: 'Asia/Dubai',
                      text: 'Dubai, United Arab Emirates',
                    },
                    {
                      value: 'UTC',
                      text: 'UTC',
                    },
                  ].filter((person) =>
                    person.text
                      .toLocaleLowerCase()
                      .includes(searchQuery.toLocaleLowerCase()),
                  ),
                )
              }
            />
          </FormControl>
          <Checkbox className="items-center w-10 h-10 p-1 rounded-full">
            <Checkbox.Label className="flex flex-col ml-4">
              <span>Terms and conditions</span>
              <span className="font-normal text-gray-500">
                I agree on terms and conditions.
              </span>
            </Checkbox.Label>
          </Checkbox>

          <Button>Create new account</Button>
        </div>
      )}
      {showCode && (
        <div
          className="w-full overflow-scroll bg-[#222222] p-4 rounded-lg font-mono h-[620px]"
          dangerouslySetInnerHTML={{ __html: exampleCode }}
        />
      )}
    </div>
  );
};

export default HomepageExample;
