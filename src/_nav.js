import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilHome,
  cilList,
  cilNotes,
  cilPuzzle,
  cibAddthis,
  //cil
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Projetos',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'NOVO',
        to: '/projetos',
        icon: <CIcon icon={cibAddthis} customClassName="nav-icon" style={{ color: 'green' }} />,
      },
      {
        component: CNavItem,
        name: 'Licitações',
        to: '/projetos/var',
      },
      {
        component: CNavItem,
        name: 'Cancelados',
        to: '/projetos/var',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pedidos',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'NOVO',
        to: '/pedidos',
        icon: <CIcon icon={cibAddthis} customClassName="nav-icon" style={{ color: 'green' }} />,
      },
      {
        component: CNavItem,
        name: 'Lancados',
        to: '/pedidos/var',
      },
      {
        component: CNavItem,
        name: 'Cancelados',
        to: '/pedidos/var',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Cadastros',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Usuários',
        to: '/usuarios',
      },
      {
        component: CNavItem,
        name: 'Produtos',
        to: '/produtos',
      },
      {
        component: CNavItem,
        name: 'Fornecedores',
        to: '/fornecedores',
      },
      {
        component: CNavItem,
        name: 'Entidades',
        to: '/entidades',
      },
      {
        component: CNavItem,
        name: 'Destinos',
        to: '/destinos',
      },
      {
        component: CNavItem,
        name: 'Grupos',
        to: '/grupos',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Relatórios',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Pedidos',
        to: '/relatorios/pedidos',
      },
    ],
  },
]

export default _nav
