import styled from 'styled-components'

export const OrderStyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    fieldset {
        grid-column: span 2;
        max-height: 600px;
        overflow: auto;
        display: grid;
        gap: 1rem;
        align-content: start;
        &.order, 
        &.menu {
            grid-column: span 1;
        }
    }
    @media (max-width: 900px) {
        fieldset.menu,
        flieldset.order {
            grid-column: span 2;
        }
    }

`

export const MenuItemStyles = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 1.3rem;
    align-content: center;
    align-items: center;
    .gatsby-image-wrapper {
        grid-row: span 2;
        height: 100%
    }
    p {
        margin: 0;
    }
    button {
        font-size: 1.5rem;
    }
    button + button {
        margin-left: 1rem;
    }
    .remove {
        background: none;
        color: var(--red);
        font-size: 3rem;
        position: absolute;
        top: 0;
        right:0;
        box-shadow: none;
        line-height: 1rem;
    }

`