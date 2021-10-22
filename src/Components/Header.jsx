import Styled from 'styled-components';
import Headercss from "Components/header.module.css";
import {Link} from "react-router-dom";

const Head = Styled.div`
    background-color: purple;
    height: 4rem;
    color: white;
    display: flex;
    padding: 0.5em 4rem;
`
const Logo = Styled(Link)`
    text-decoration: none;
    color: white;
`

function Header() {
    return (
        <Head>
            <Logo to="/">
                <h2 >How far😏</h2>
            </Logo>
        </Head>
    )
}
 
export default Header;

