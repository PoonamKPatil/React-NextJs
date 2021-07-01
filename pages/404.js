import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";

function Error404() {

    const router = useRouter()

    useEffect(() => {
       setTimeout(() => {
        //    router.go(-1)
        //    router.go(+1)
            router.push('/')
       }, 3000);
    }, [])

    
    return (
        <div className="not-found">
            <h1>Ooppss....</h1>
            <h2>Page Cannot be found</h2>
            <p>Go Back to <Link href="/"><a>HomePage</a></Link></p>
        </div>
    )
}

export default Error404
