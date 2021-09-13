import Image from 'next/image';
import logoIgNews from '../../../public/images/logo.svg';

import { SignInButton } from './SigninButton';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoIgNews} alt="ig.news"/>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}