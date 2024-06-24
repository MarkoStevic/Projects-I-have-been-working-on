const Section = ({ children, title, ...props }) => {
    return (
        <secton {...props} >
            <h2> {title} </h2>
            {children}
        </secton>
    )
}

export default Section