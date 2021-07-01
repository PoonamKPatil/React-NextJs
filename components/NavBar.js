import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
    
    return (
        <nav>
            <div className="logo">
                <Image src="/users.jpeg" width={128} height={85}></Image>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>Users</a></Link>
        </nav>
    )
}

export default NavBar
