import Head from 'next/head'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default function NavbarLayout({children}) {
    return (
<div>
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Company Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about-us">About us</Nav.Link>
        
          </Nav>
          <Nav>
            <Nav.Link href="#contact">contact us</Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Our Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <footer>
          <div className="container ">
              <div className="row m-0 my-5">
                
                          <div className="col-md-3 col-6">
                              <h3>Company Name</h3>
                              <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
</p>
<p>Code licensed MIT, docs CC BY 3.0.
Currently v5.0.1.</p>
                          </div>
                          <div className="col-md-2 col-6 offset-md-1">
                              <h3>Links</h3>
                              <p>Docs</p>
                              <p>Themes</p>
                              <p>Blogs</p>
                              <p>Blogs</p>

                          </div>
                          <div className="col-md-3  col-6 ">
                              <h3>Guides</h3>
                              <p>Getting started</p>
                              <p>Starter template</p>
                              <p>Webpack</p>
                              <p>Parcel</p>

                          </div>
                          <div className="col-md-3 col-6">
                              <h3>Projects</h3>
                              <p>Bootstrap 5</p>
                              <p>Bootstrap 5 </p>
                              <p>npm starter</p>

                          </div>
                
              </div>

          </div>
      </footer>
</div>
    )
}

