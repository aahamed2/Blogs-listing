import Link from 'next/link';
import styles from '../../styles/list.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {
        props: { listings: data }
    }
}

const blogs = ({ listings }) => {

    return (
        <div>
            <h1>This is where all the blogs are shown</h1>
            {
                listings.map(list => (

                    <Link href = {'/blogs/'+ list.id} key={list.id} >
                        <a className={styles.single}>
                            <h3>{list.name} </h3>
                        </a>
                        </Link>
      
                ))}

        </div>
    );
}

export default blogs;
