import classNames from 'classnames';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { OpcoesOrdenador } from '..';
import opcoes from './opcoes.json';
import style from './Ordenador.module.scss';


type Props = {
    ordenador: OpcoesOrdenador,
    setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}
export function Ordenador({ ordenador, setOrdenador }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

    const open = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button
            className={classNames({
                [style.ordenador]: true,
                [style['ordenador--ativo']]: ordenador !== '',
            })}
            onClick={open} onBlur={() => setIsOpen(false)}
        >
            <span>{nomeOrdenador || 'Ordenador Por'}</span>
            {isOpen ? < MdKeyboardArrowUp fontSize={24} /> : < MdKeyboardArrowDown fontSize={24} />}

            <div className={classNames({
                [style.ordenador__options]: true,
                [style['ordenador__options--ativo']]: isOpen,
            })}>

                {opcoes.map((opcao) => (
                    <div
                        key={opcao.value}
                        className={style.ordenador__option}
                        onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}
                    >
                        {opcao.nome}
                    </div>
                ))}

            </div>

        </button>
    );
}