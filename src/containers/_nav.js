import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Today']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Incoming Orders',
    to: '/incoming',
    icon: 'cil-drop',
    badge: {
      color: 'success',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Completed Orders',
    to: '/completed',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Delivered Orders',
    to: '/delivered',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Previous']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Previous Orders',
    to: '/previous',
    icon: 'cil-drop',
    badge: {
      color: 'info',
      text: 'OLD',
    }
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Menu',
    to: '/menus',
    icon: 'cil-drop'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Payments',
    to: '/payments',
    icon: 'cil-ban',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  }
]

