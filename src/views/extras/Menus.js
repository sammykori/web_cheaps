import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CSwitch,
} from  '@coreui/react'
// import CIcon from '@coreui/icons-react'


const Menus = () => {
  // const [collapsed, setCollapsed] = React.useState(true)
  // const [showCard, setShowCard] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard accentColor="primary">
            <CCardHeader>
              Worker Menu
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'danger'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard accentColor="primary">
            <CCardHeader>
              Bossu Menu
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'danger'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard accentColor="primary">
            <CCardHeader>
              Snacker Menu
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'danger'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Menus
