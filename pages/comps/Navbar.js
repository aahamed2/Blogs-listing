import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>What The Blog!?</h1>
            </div>
            <Link href ="/"><a>Home</a></Link>
            <Link href ="/about"><a>About Us</a></Link>
            <Link href ="/blogs"><a>All Blogs</a></Link>
        </nav>

    );
}

export default Navbar;