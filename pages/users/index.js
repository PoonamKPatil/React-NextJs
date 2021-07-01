import Link from "next/link"
import styles from "../../styles/Users.module.css"

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    return {
        props: {
            users: data
        }
    }
}

function index({ users }) {
    return (
        <div>
            <h1>List of Users</h1>

            {
                users.map((user) => {
                    return (
                        <Link key={user.id} href={`/users/${user.id}`}>
                        <a className={styles.single}>{user.name}</a>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default index
