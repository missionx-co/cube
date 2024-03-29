import {
  Button,
  Checkbox,
  Combobox,
  FormControl,
  Input,
} from '@cube-ui/components';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as shiki from 'shiki';

import Cube from '@components/Cube';
import GithubIcon from '@components/GithubIcon';

import HomepageExample from '../components/Examples/HomepageExample/index';

function Home({ exampleCode }: any) {
  const router = useRouter();

  const goToInstallation = () => router.push('/installation');
  const goToGithub = () =>
    (document.location.href = 'https://github.com/missionx-co/cube');

  return (
    <main className="w-full min-h-screen bg-white">
      <Head>
        <title>Cube - Build React SPAs faster with React and TailwindCSS</title>
        <meta
          name="description"
          content="Design System, UI Kit and an Admin dashboard built with React and Tailwind CSS"
        />
        <meta
          name="keywords"
          content="React, Components, Library, Design System, Tailwind CSS, stitches, Components Library"
        />
        <meta name="author" content="Mohammed Manssour" />
      </Head>
      <header>
        <div className="container flex justify-between p-2 mx-auto">
          <Cube />
          <div className="flex items-center justify-end w-full space-x-10 text-gray-600">
            <Link href="/installation">
              <a className="hover:text-primary-600 text-xl">Docs</a>
            </Link>
            <a
              href="https://github.com/missionx-co/cube"
              className="hover:text-primary-600 w-8 h-8 fill-current"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </header>
      <div className="lg:flex-row lg:space-y-0 lg:space-x-10 container flex flex-col items-center px-2 mx-auto my-12 space-y-10">
        <div className="lg:w-1/2 flex-shrink-0 w-full space-y-5">
          <h1 className="text-display-md font-bold">
            Accessible-ish, Productive and Customizable
          </h1>
          <p className="text-xl leading-relaxed">
            <strong className="text-primary-600 font-medium">Cube</strong> is a
            simple Design system, React Components Library and UI Kit built with{' '}
            <strong className="text-primary-600 font-medium">React</strong> and{' '}
            <strong className="text-primary-600 font-medium">
              Tailwind CSS
            </strong>
            .
          </p>
          <div className="space-x-5">
            <Button onClick={goToInstallation}>Get Started</Button>
            <Button
              onClick={goToGithub}
              variant="light"
              className="hover:bg-gray-200 text-gray-700 bg-gray-100"
            >
              Star on Github
            </Button>
          </div>
        </div>
        <HomepageExample exampleCode={exampleCode} />
      </div>

      <footer className="py-10 text-center">
        Built by{' '}
        <a
          href="http://mohammedmanssour.me"
          target="_blank"
          rel="noreferrer"
          className="text-primary-400 hover:text-primary-600"
        >
          Mohammed Manssour
        </a>
      </footer>
    </main>
  );
}

export async function getStaticProps() {
  const code = `<div className="bordar-gray-200 w-full p-4 space-y-5 bg-gray-100 border rounded-lg shadow">

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
</div>`;

  const highlighter = await shiki.getHighlighter({
    theme: 'slack-dark',
  });

  const exampleCode = highlighter.codeToHtml(code, { lang: 'js' });

  return {
    props: {
      exampleCode,
    },
  };
}

export default Home;
