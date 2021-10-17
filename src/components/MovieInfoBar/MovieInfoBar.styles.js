import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    background: var(--darkGray);
    padding: 0px 20px;
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0px auto;

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGray);
        border-radius: 20px;
        margin: 0px 20px;
        flex: 1;

        :first-child {
            margin-left: 0px;
        }

        ::last-child {
            margin-right: 0px;
        }
    }

    @media screen and (max-width: 768px) {
        display: block;

        .column {
            margin: 20px 0px;
        }
    }
`;
