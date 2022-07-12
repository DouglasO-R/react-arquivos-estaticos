import Styles from './Cardapio.module.scss';
import { Buscador } from './Buscador';
import { useState } from 'react';
import { Filtros } from './Filtros';
import { Ordenador } from './Ordenador';
import { Itens } from './Itens';


export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';

export function Cardapio() {
    const [search, setSearch] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('');


    return (
        <section className={Styles.cardapio}>
            <h3 className={Styles.titulo}>Cardapio</h3>
            <Buscador search={search} handleSearch={setSearch} />

            <div className={Styles.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFiltro} />

                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
            </div>

            <Itens search={search} filtro={filtro} ordenador={ordenador} />
        </section>
    );

}