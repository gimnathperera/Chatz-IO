import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState, useDarkMode } from './hooks/hooks';
import Channel from './components/Channel';
import Loader from './components/Loader';

firebase.initializeApp({
  apiKey: 'AIzaSyBvDWnciMMQQKH8JoDAw6LVObn2ekhU5QA',
  authDomain: 'chatz-io.firebaseapp.com',
  projectId: 'chatz-io',
  storageBucket: 'chatz-io.appspot.com',
  messagingSenderId: '606329406047',
  appId: '1:606329406047:web:7df58d6ba7ccf6ae2511ea',
});

const MoonIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
      clipRule='evenodd'
    />
  </svg>
);

const SunIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
    {...props}
  >
    <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
  </svg>
);

function App() {
  const { user, initializing } = useAuthState(firebase.auth());
  const [darkMode, setDarkMode] = useDarkMode();

  const brandLogo = darkMode
    ? `${process.env.PUBLIC_URL}/logo_dark.svg`
    : `${process.env.PUBLIC_URL}/logo_light.svg`;

  const ThemeIcon = darkMode ? SunIcon : MoonIcon;

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className='flex items-center justify-center h-full'>
          <Loader size='lg' />
        </div>
      );
    }

    if (user) return <Channel user={user} />;

    return (
      <div className='flex items-center justify-center shadow-md h-full'>
        <div className='flex flex-col items-center justify-center max-w-xl w-full mx-4 p-8 rounded-md shadow-card bg-white dark:bg-coolDark-600 transition-all'>
          <h2
            className='mb-2 text-3xl flex items-center'
            style={{ fontFamily: 'Risque' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='64'
              height='64'
              viewBox='0 0 48 48'
            >
              <defs>
                <linearGradient
                  id='linear0'
                  x1='310.43'
                  x2='310.43'
                  y1='222.051'
                  y2='432.656'
                  gradientTransform='rotate(.409) scale(.09412)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#DC4955'></stop>
                  <stop offset='1' stopColor='#C4237C'></stop>
                </linearGradient>
                <linearGradient
                  id='linear1'
                  x1='415.675'
                  x2='214.777'
                  y1='374.845'
                  y2='173.947'
                  gradientTransform='rotate(.409) scale(.09412)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#8A1958' stopOpacity='0'></stop>
                  <stop offset='1' stopColor='#8A1958'></stop>
                </linearGradient>
                <linearGradient
                  id='linear2'
                  x1='310.423'
                  x2='310.423'
                  y1='406.382'
                  y2='489.294'
                  gradientTransform='rotate(.409) scale(.09412)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#8A1958' stopOpacity='0'></stop>
                  <stop offset='1' stopColor='#8A1958'></stop>
                </linearGradient>
                <linearGradient
                  id='linear3'
                  x1='90.603'
                  x2='303.233'
                  y1='14.985'
                  y2='353.396'
                  gradientTransform='rotate(.409) scale(.09412)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#76CCF8'></stop>
                  <stop offset='0.833' stopColor='#518EF8'></stop>
                  <stop offset='1' stopColor='#4981F8'></stop>
                </linearGradient>
                <linearGradient
                  id='linear4'
                  x1='178.53'
                  x2='178.53'
                  y1='202.667'
                  y2='284.691'
                  gradientTransform='rotate(.409) scale(.09412)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#4071F7' stopOpacity='0'></stop>
                  <stop offset='1' stopColor='#30569F'></stop>
                </linearGradient>
                <linearGradient
                  id='linear5'
                  x1='67.94'
                  x2='107.468'
                  y1='112.61'
                  y2='152.138'
                  gradientTransform='matrix(-.09412 0 0 .09412 31.994 0)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#EEF4FF'></stop>
                  <stop offset='1' stopColor='#CFE7FD'></stop>
                </linearGradient>
                <linearGradient
                  id='linear6'
                  x1='145.521'
                  x2='185.049'
                  y1='112.61'
                  y2='152.138'
                  gradientTransform='matrix(-.09412 0 0 .09412 31.994 0)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#EEF4FF'></stop>
                  <stop offset='1' stopColor='#CFE7FD'></stop>
                </linearGradient>
                <linearGradient
                  id='linear7'
                  x1='223.102'
                  x2='262.63'
                  y1='112.61'
                  y2='152.138'
                  gradientTransform='matrix(-.09412 0 0 .09412 31.994 0)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#EEF4FF'></stop>
                  <stop offset='1' stopColor='#CFE7FD'></stop>
                </linearGradient>
                <linearGradient
                  id='linear8'
                  x1='-63.464'
                  x2='-23.936'
                  y1='320.991'
                  y2='360.519'
                  gradientTransform='matrix(-.09412 0 0 .09412 31.994 0)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#EEF4FF'></stop>
                  <stop offset='1' stopColor='#CFE7FD'></stop>
                </linearGradient>
                <linearGradient
                  id='linear9'
                  x1='14.118'
                  x2='53.646'
                  y1='320.991'
                  y2='360.519'
                  gradientTransform='matrix(-.09412 0 0 .09412 31.994 0)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#EEF4FF'></stop>
                  <stop offset='1' stopColor='#CFE7FD'></stop>
                </linearGradient>
                <linearGradient
                  id='linear10'
                  x1='91.699'
                  x2='131.227'
                  y1='320.991'
                  y2='360.519'
                  gradientTransform='matrix(-.09412 0 0 .09412 31.994 0)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#EEF4FF'></stop>
                  <stop offset='1' stopColor='#CFE7FD'></stop>
                </linearGradient>
                <linearGradient
                  id='linear11'
                  x1='236.377'
                  x2='236.377'
                  y1='197.333'
                  y2='301.641'
                  gradientTransform='rotate(.409) scale(.09412)'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0' stopColor='#9D66D6'></stop>
                  <stop offset='1' stopColor='#453D81'></stop>
                </linearGradient>
              </defs>
              <g>
                <path
                  fill='url(#linear0)'
                  d='M25.383 16.102c-6.797 0-12.278 4.652-14.348 10.57-.457 1.3-.601 2.73-.601 4.191 0 8.254 6.695 14.95 14.949 14.95h7.668c.867 0 1.719-.079 2.547-.223l4.515 2.242c1.121.559 2.414-.355 2.262-1.602l-.414-3.363C45.625 40.141 48 35.777 48 30.863c0-8.12-6.469-14.726-14.535-14.945zm0 0'
                ></path>
                <path
                  fill='url(#linear1)'
                  d='M41.96 42.863l.415 3.367c.152 1.247-1.14 2.16-2.262 1.602l-4.515-2.242c-.828.144-1.676.222-2.547.222h-2.88l-19.14-19.14-.004.004c1.774-5.922 7.555-10.574 14.356-10.574l8.082-.184a14.888 14.888 0 0110.156 4.371A14.903 14.903 0 0148 30.86c0 4.918-2.375 9.282-6.04 12.004zm0 0'
                ></path>
                <path
                  fill='url(#linear2)'
                  d='M46.98 36.297H11.453c2.176 5.57 7.594 9.516 13.93 9.516h7.668c.867 0 1.719-.079 2.547-.223l4.515 2.242c1.121.559 2.414-.355 2.262-1.602l-.414-3.363a15.025 15.025 0 005.02-6.57zm0 0'
                ></path>
                <path
                  fill='url(#linear3)'
                  d='M13.41 0h6.88C27.694 0 33.7 6.004 33.7 13.41c0 .856-.083 1.695-.235 2.508-1.172 6.207-6.625 10.809-13.176 10.809H13.41c-.777 0-1.543.023-2.285-.102l-4.05 2.012c-1.009.5-2.165-.32-2.028-1.438l.371-3.02A13.391 13.391 0 010 13.41C0 6.004 6.004 0 13.41 0zm0 0'
                ></path>
                <path
                  fill='url(#linear4)'
                  d='M.766 17.883a13.41 13.41 0 004.652 6.297l-.371 3.02c-.137 1.116 1.02 1.937 2.027 1.437l4.051-2.012c.742.125 1.508.102 2.285.102h6.88c5.839 0 10.71-3.637 12.55-8.844zm0 0'
                ></path>
                <path
                  fill='url(#linear5)'
                  d='M26.773 12.047a2.622 2.622 0 11-5.243-.001 2.622 2.622 0 015.243 0zm0 0'
                ></path>
                <path
                  fill='url(#linear6)'
                  d='M19.469 12.047a2.619 2.619 0 11-5.239 0 2.62 2.62 0 012.618-2.621 2.622 2.622 0 012.62 2.62zm0 0'
                ></path>
                <path
                  fill='url(#linear7)'
                  d='M12.168 12.047a2.622 2.622 0 11-5.241 0 2.622 2.622 0 015.241 0zm0 0'
                ></path>
                <path
                  fill='url(#linear8)'
                  d='M39.14 31.66a2.622 2.622 0 11-5.241 0 2.622 2.622 0 015.242 0zm0 0'
                ></path>
                <path
                  fill='url(#linear9)'
                  d='M31.836 31.66a2.62 2.62 0 01-2.617 2.621 2.622 2.622 0 010-5.242 2.618 2.618 0 012.617 2.621zm0 0'
                ></path>
                <path
                  fill='url(#linear10)'
                  d='M24.535 31.66a2.622 2.622 0 11-5.243 0 2.622 2.622 0 015.243 0zm0 0'
                ></path>
                <path
                  fill='url(#linear11)'
                  d='M33.465 15.918a14.636 14.636 0 00-.414-.008h-7.668c-6.801 0-12.54 4.543-14.352 10.762l.094-.047a13.77 13.77 0 002.285.195h6.88c6.55 0 12-4.695 13.175-10.902zm0 0'
                ></path>
              </g>
            </svg>
            Chatz IO
          </h2>
          <p className='mb-8 text-lg text-center'>
            The easiest way to chat with people all around the world.
          </p>
          <button
            onClick={signInWithGoogle}
            className='rounded shadow-button pl-6 pr-8 py-3 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75'
          >
            <svg
              viewBox='5 -5 30 30'
              enableBackground='new 5 -5 30 30'
              className='w-6 h-6 mr-4 flex-shrink-0'
            >
              <path
                fill='#fff'
                d='M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z'
              ></path>
              <path
                fill='#EA4335'
                d='M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z'
              ></path>
              <path
                fill='#FBBC05'
                d='M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z'
              ></path>
              <path
                fill='#4285F4'
                d='M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z'
              ></path>
              <path
                fill='#34A853'
                d='M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z'
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col h-full bg-white dark:bg-coolDark-500 dark:text-white transition-colors'>
      <header
        className='flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md'
        style={{ height: 'var(--topbar-height)' }}
      >
        <a href='https://alterclass.io/courses/react'>
          <img src={brandLogo} alt='AlterClass' width={150} />
        </a>
        <div className='flex items-center'>
          {user ? (
            <button
              onClick={signOut}
              className='uppercase text-sm font-medium text-primary-500 hover:text-white tracking-wide hover:bg-primary-500 bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 transition-all'
            >
              Sign out
            </button>
          ) : null}
          <ThemeIcon
            className='h-8 w-8 cursor-pointer'
            onClick={() => setDarkMode((prev) => !prev)}
          />
        </div>
      </header>
      <main
        className='flex-1'
        style={{ maxHeight: 'calc(100% - var(--topbar-height))' }}
      >
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
