import Head from 'next/head'
import DateRangeIcon from '@material-ui/icons/DateRange';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import NavbarLayout from './layout'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarLayout>
       <div className="backgound-grey ">
             <section className="landing-image-container   d-flex">
                   <div className=" container text-center  align-self-center">
                            <div className="row">
                                  <div className="col-md-7  text-white mx-auto landing-text">
                                         We are a digital creative agency. we focus on design, consulting, and technology.
                                  </div>
                            </div>
                            <div className="mt-5">
                                  <button className="btn btn-outline-light">LEARN MORE</button>

                            </div>
                   </div>
             </section>
             <section className="mt-5 container-fluid ">
                    <div>
                          <div className="text-center">
                                <div className=" what-happen-text">
                                    What is happening
                                </div> 
                              
                          </div>
                          <div className="row card-container text-card" >
                          <div className="col-md-4 mt-3 ">
                                       <div className="card-image-container img-assessories"></div>
                                       <div>
                                         <div className="ml-1 border-bottom-dotted ">
                                           <h5>The Sky Is The Limit</h5>
                                           <p>
                                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                           </p>
                                         </div>
                                         <div className="d-flex mt-1 card-footer-text justify-content-end">
                                                 <ChatBubbleOutlineIcon className="card-footer-icon"/> 3 | <DateRangeIcon className="card-footer-icon "/> 14 NOV.
                                         </div>
                                     </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                       <div className="card-image-container img-assessories"></div>
                                     <div>
                                         <div className="ml-1 border-bottom-dotted">
                                           <h5>Another Cool Stuff</h5>
                                           <p>
                                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                           </p>
                                         </div>
                                         <div className="d-flex mt-1 card-footer-text justify-content-end">
                                                 <ChatBubbleOutlineIcon className="card-footer-icon "/> 1 | <DateRangeIcon className="card-footer-icon "/> 13 Oct.
                                         </div>
                                     </div>
                                </div>

                                <div className="col-md-4 mt-3">
                                       <div className="card-image-container img-assessories"></div>
                                       <div>
                                         <div className="ml-1 border-bottom-dotted">
                                           <h5>This Is Awesome</h5>
                                           <p>
                                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                           </p>
                                         </div>
                                         <div className="d-flex mt-1 card-footer-text justify-content-end">
                                                 <ChatBubbleOutlineIcon className="card-footer-icon "/> 1 | <DateRangeIcon className="card-footer-icon "/> 13 Oct.
                                         </div>
                                     </div>
                                </div>

                          </div>
                    </div>
             </section>
             <section className="mt-5">
                  <div className="center-image-container  d-flex justify-content-center ">
                           <div className="align-self-center  text-center">
                             <div className="row m-0 text-center ">
                                <div className="col-7 text-white center-image-text mx-auto">
                                    The Probability of success is difficult to estimate; but if we never search, the chance of success is zero.

                                </div>
                             </div>
                                <button className=" btn btn-outline-light mx-auto mt-4">LEARN MORE</button>
                           </div>
                  </div>
             </section>
             <section>
                      <div className="mt-5 container-fluid">
                         <div className="text-center">
                                <div className=" what-happen-text">
                                    Our Latest Work
                                </div> 
                              
                          </div>
                          <div className="row card-container ">
                                  <div className="col-lg-4 col-md-6 mt-5">
                                    <div className="card-image-container img-book"></div>
                                    <div className="d-flex justify-content-center mt-3">
                                           <p className="text-footer">APE - <FavoriteBorderRoundedIcon className="favourite-icon"/></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 mt-5">
                                    <div className="card-image-container img-book"></div>
                                    <div className="d-flex justify-content-center mt-3">
                                           <p className="text-footer">RAIDERS - <FavoriteBorderRoundedIcon className="favourite-icon"/></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 mt-5">
                                    <div className="card-image-container img-book"></div>
                                    <div className="d-flex justify-content-center">
                                           <p className="text-footer">VIKINGS - <FavoriteBorderRoundedIcon className="favourite-icon"/></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 mt-5">
                                    <div className="card-image-container img-book"></div>
                                    <div className="d-flex justify-content-center mt-3">
                                           <p className="text-footer">APE - <FavoriteBorderRoundedIcon className="favourite-icon"/></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 mt-5">
                                    <div className="card-image-container img-book"></div>
                                    <div className="d-flex justify-content-center mt-3">
                                           <p className="text-footer">RAIDERS - <FavoriteBorderRoundedIcon className="favourite-icon"/></p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 mt-5">
                                    <div className="card-image-container img-book"></div>
                                    <div className="d-flex justify-content-center">
                                           <p className="text-footer">VIKINGS - <FavoriteBorderRoundedIcon className="favourite-icon"/></p>
                                    </div>
                                  </div>
                                 
                          </div>
                          <div className="my-5 text-center">
                            <button className="btn btn-primary background-green my-3"> VIEW OUR PORTFOLIO</button>

                          </div>
                      </div>
             </section>
             <section className="background-grey-light  pb-5 ">
                      <div className="mt-5 container-fluid mb-5">
                         <div className="text-center ">
                                <div className=" what-happen-text">
                                    Brands & Clients
                                </div> 
                              
                          </div>
                          <div className="row card-container mt-5 ">
                            <div className="col-lg-3 col-md-6 mt-5">
                                   <img src="/dribble.png" width="100%" />
                            </div>
                            <div className="col-lg-3 col-md-6 mt-5">
                                   <img src="/code-is.png" width="100%" />
                            </div>
                            <div className="col-lg-3  col-md-6 mt-5">
                                   <img src="/vimeo.jpg" width="100%" />
                            </div>
                            <div className="col-lg-3  col-md-6 mt-5">
                                   <img src="/vimeo.jpg" width="100%" />
                            </div>
                         </div>
                      </div>
             </section>
             <section>
             <div className="container-fluid py-4 bg-dark ">
                         <div className="text-center  ">
                                <div className=" what-happen-text text-white">
                                    Our Work Process
                                </div> 
                               <div className="row m-0">
                               <div className="text-left text-white col-md-7 my-4 mx-auto">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                               </div>
                              
                          </div>
                         
                      </div>
             </section>
       </div>
       </NavbarLayout>
    </div>
  )
}
