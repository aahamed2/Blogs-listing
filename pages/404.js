import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Notfound = () => {

    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {

            router.push('/');
        }, 3000)

    }, []);

    return (
        <div className="not-found">
            <h1>Oops</h1>
            <p>Go Back To <Link href="/"><a> Homepage</a></Link></p>
        </div>

    );
}

export default Notfound;