import styled, {keyframes} from "styled-components"



export const Section = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
min-height: 100vh;
gap: 2rem;

::before {
    display: block;
    content: "";
    background: url('../../assets/images/meetImage.png') no-repeat center center;
    background-size: cover;
}
`




// .forms {
//     max-width: 30rem;
//     padding: 1rem;
//     margin-top: 20vh
// }