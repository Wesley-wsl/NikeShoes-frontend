import React, { FormEvent } from "react";

import * as S from "./styles";

const SizeSelector: React.FC = () => {
    function handleSelectSize(e: FormEvent) {
        const $buttons = document.querySelectorAll("button[data-size]");
        $buttons.forEach(button => {
            button.classList.remove("selected");
        });

        const $button = e.target as Element;
        $button.classList.add("selected");
    }

    return (
        <S.Container>
            <S.Title>Select Size (US)</S.Title>
            <div>
                <button
                    data-size
                    onClick={e => handleSelectSize(e)}
                    className="selected"
                >
                    8
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    8.5
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    9
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    9.5
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    10
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    10.5
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    11
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    11.5
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    12
                </button>
                <button data-size onClick={e => handleSelectSize(e)}>
                    12.5
                </button>
            </div>
        </S.Container>
    );
};

export default SizeSelector;
