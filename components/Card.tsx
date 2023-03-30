import { IconContext } from 'react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import styles from '../styles/overlay.module.scss';

interface Props {
  image: string;
  overlayIcons: any[];
  projectPageLink: string;
}

function Card(props: Props) {
  const IconData = useMemo(() => ({ color: 'white', size: '48px' }), []);
  const {
    image,
    projectPageLink,
    overlayIcons,
  } = props;
  return (
    <div className={styles.card}>
      <Image src={image} className={styles.image} width={400} height={238} alt="project card" />
      <Link
        href={projectPageLink}
        className={`${styles.overlay} ${styles.overlayBottom}`}
      >
        <div className={styles.text}>View More</div>
        <div className={styles.ico}>
          <IconContext.Provider value={IconData}>
            {overlayIcons.map((icon:any, index:number) => (<span key={index}>{ icon}</span>))}
          </IconContext.Provider>
        </div>
      </Link>
    </div>
  );
}

export default Card;
