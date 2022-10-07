import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>
                Keep up to date with the latest web dev news
            </p>
        </div>
    )
}


// Style condition (Styled JSX)
// const Header = () => {
//     const x = 5;
//     return (
//             <div>
//                 <h1 className='title'>
//                     <span>WebDev</span> News
//                 </h1>
//                 <style jsx>
//                 {`
//                     .title {
//                         color: ${ x === 2 ? 'green' : 'red'};
//                     }
//                 `}
//                 </style>
//                 <p className={headerStyles.description}>
//                     Keep up to date with the latest web dev news
//                 </p>
//             </div>
//     )
// }

export default Header