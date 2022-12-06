import { IconContext } from "react-icons";
import Link from 'next/link';
import styles from '../styles/overlay.module.scss'
import Image from 'next/image'

interface Props {
  image: string;
  overlayIcons: any[];
  projectPageLink: string;
}


function Card(props: Props) {
  const {
    image,
    projectPageLink,
    overlayIcons,
  } = props;
  return (
    <div className={styles.card}>
      <Image src={image} className={styles.image} width={400} height={238} alt="project card" />
      <Link href={projectPageLink}
        className={`${styles.overlay} ${styles.overlayBottom}`}
      >
        <div className={styles.text}>View More</div>
        <div className={styles.ico}>
          <IconContext.Provider value={{ color: "white", size: "48px" }}>
            {overlayIcons.map((icon:any, index:number) => (<span key={ index}>{ icon}</span>))}
          </IconContext.Provider>
        </div>
      </Link>
    </div>
  );
}

export default Card;