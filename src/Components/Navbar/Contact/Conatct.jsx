import React, { Component } from 'react';

class Conatct extends Component {

    validation(){
        let input1 = document.querySelector(".input1");
        if(input1.value ==""){
            document.querySelector(".help-block1").classList.remove("d-none")
        }
        let input2 = document.querySelector(".input2");
        if(input2.value ==""){
            document.querySelector(".help-block2").classList.remove("d-none")
        }
        let input3 = document.querySelector(".input3");
        if(input3.value ==""){
            document.querySelector(".help-block3").classList.remove("d-none")
        }
        let input4 = document.querySelector(".input4");
        if(input4.value ==""){
            document.querySelector(".help-block4").classList.remove("d-none")
        }
    }
    render() {
        return (
            
                <section className='py-5'>
                    <div className="container w-75">
                    <h2 className="page-section-heading text-center text-uppercase ">CONTACT ME</h2>
                    <div class="divider-custom d-flex justify-content-center align-items-center">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> <i className="fas fa-star"></i> </div>
                    <div class="divider-custom-line"></div>
                </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
                <form id="contact-Form " name='sendMessage'>
                <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input class="form-control input1" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
                                    <p class="help-block1 text-danger d-none"><ul role="alert"><li>Please enter your name.</li></ul></p>
                                </div>
                 </div>
                <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input class="form-control input2 " id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your Email Address." aria-invalid="false"/>
                                  <p class="help-block2 text-danger d-none"><ul role="alert"><li>Please enter your email address.</li></ul></p>
                                </div>
                 </div>
                <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input class="form-control input3 " id="number" type="text" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your Phone Number." aria-invalid="false"/>
                                  <p class="help-block3 text-danger d-none"><ul role="alert"><li>Please enter your phone number.</li></ul></p>
                                </div>
                 </div>
                <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea class="form-control input4" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                                  <p class="help-block4 text-danger d-none"><ul role="alert"><li>Please enter a message.</li></ul></p>
                                </div>
                 </div>
                 <br/>
                 <div class="form-group"><button onClick={this.validation} class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                </form>
            </div>
          </div>
                    </div>
                </section>
            
        );
    }
}

export default Conatct;