import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Cardapio } from './pages/Cardapio';
import { Inicio } from 'pages/Inicio';
import { Menu } from 'components/Menu';
import { PaginaPadrao } from 'components/PaginaPadrao';
import { Sobre } from 'pages/Sobre';
import { Footer } from 'components/Footer';
import { NotFound } from 'pages/NotFound';
import { Prato } from 'pages/Prato/index';

export function AppRouter() {
    return (
        <main className='container'>
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path='/' element={<PaginaPadrao />} >
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                    
                    <Route path='*' element={<NotFound />} />
                    <Route path='/prato/:id' element={<Prato />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </main>
    )
}