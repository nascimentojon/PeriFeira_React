import React from 'react'
import './App.css'
import Navbar from './componentes/estaticos/Navbar/Navbar';
import Home from './paginas/home/Home'
import Footer from './componentes/estaticos/footer/Footer';
import Sobre from './paginas/sobre/Sobre';
import Loja from './paginas/loja/Loja';
import Login from './paginas/login/Login';
//Categorias
import CadastrarCategoria from './componentes/categorias/cadastrarCategoria/CadastrarCategoria';
import ListarCategoria from './componentes/categorias/listarCategoria/ListarCategoria';
import DeletarCategoria from './componentes/categorias/deletarCategoria/DeletarCategoria';
//Produtos
import CadastrarProduto from './componentes/produtos/cadastrarProduto/CadastrarProduto';
import ListarProduto from './componentes/produtos/listarProduto/ListarProduto';
import DeletarProduto from './componentes/produtos/deletarProduto/DeletarProduto';
import TabProduto from './componentes/produtos/tabProduto/TabProduto';
//Outros
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import {Provider} from 'react-redux'
import store from './store/store'

function App() {
	return (
	<Provider store={store}>
		<BrowserRouter>
			<Navbar/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					{/*Base*/}
					<Route path='/home' element={<Home/>}/>
					<Route path='/sobre' element={<Sobre/>}/>
					<Route path='/loja' element={<Loja/>}/>
					{/*Usuario*/}
					<Route path='/login' element={<Login/>}/>
					<Route path='/cadastro' element={<CadastroUsuario/>}/>
					{/*Categorias*/}
					<Route path='/categorias/:id' element={<CadastrarCategoria/>}/>
					<Route path='/deletarCategoria/:id' element={<DeletarCategoria/>}/>
					{/*Produtos*/}
					<Route path='/produtos/:id' element={<CadastrarProduto/>}/>
					<Route path='/deletarProduto/:id' element={<DeletarProduto/>}/>
					<Route path='/tabs' element={<TabProduto/>}/>
				</Routes>
			<Footer/>
		</BrowserRouter>
		</Provider>
);
}

export default App;
