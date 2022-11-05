import './Button.scss'
function Button({children,paramClass}) {
    return (
        <>
          <button className={`btn  ${paramClass}`}>{children}</button>
        </>
    )
}
export default Button