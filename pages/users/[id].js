//tells next how many html pages needs to be built
//paths property tells how many html pages to be created
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

    const data = await res.json()

    const paths = data.map((user) => {
        return {
            params: {id : user.id.toString()}
        }
    })
    return {
        paths: paths,
        fallback: false
    }

}

//runs 10 times as 10 users
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const data = await res.json()

    return {
        props: {
            user: data
        }
    }
}

function SingleUser({user}) {
    return (
        <div>
            <h1>Details of User</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <p>City: {user.address.city}</p>
        </div>
    )
}

export default SingleUser
