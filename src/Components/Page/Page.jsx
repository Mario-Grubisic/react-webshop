function Page() {

    const title = "Some title";
    const description = "Lorem ipsum";

    return(
        <>
            {title && <h1>{title}</h1>}
            <p>{description}</p>
            <h3>This is a page component</h3>
        </>
    )
}

export {Page}