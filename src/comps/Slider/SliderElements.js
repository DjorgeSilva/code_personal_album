import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    position: relative;
    top: 0;
    margin-bottom: 0px;

    .slider{
        .itemSlider{
            .item:after {
                content:"";
                position:absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
                background:rgba(0,0,0,0.4);
                }

            .item>img{
                animation: zoom 20s;

                @keyframes zoom{
                    0%{
                        transform: scale(1);
                    }   
                    100%{
                        transform: scale(1.2);
                    }
                }
            }
        
            .info-txt-slider{
                h3{
                    width: 55%;
                    font-size: clamp(1rem, 5vw, 8rem);
                    color: #fff;
                    margin: 0 auto;

                    span{
                        color: ${props => props.theme.secundary_color};
                    }
                }
                button{
                    outline: none;
                    padding: 5px 20px;
                    font-size: clamp(1rem,2.5vw, 1.5rem);
                    border: none;
                    color: #fff;
                    margin-top: 20px;
                    background: #E32B2B;
                    border-radius: 20px;

                    &:hover{
                        color: #E32B2B;
                        background: #fff;
                    }
                    }
                }
                
            }
    }
`