import React from 'react';
import "./Mainbody.css";

function Mainbody() {
  return (
    <div className='main-body'>
      {/* <div className="slide-container">
        <div className="content">
          <span>nike sports shoes</span>
          <h3>nike metcom shoes</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Ducimus, ab. Reprehenderit deserunt quo iure repellendus sit sed delectus tenetur perferendis alias, 
            pariatur maiores, accusantium, eius ea quod vero nemo doloremque.
          </p>
        </div>
        <div className="image-sec">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        </div>
      </div> */}
      <div className="slide-container">
        <div className="slide">
          <div className="content">
            <span>niike sports shoes</span>
            <h3>nike metcon shoes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odio, impedit? Repudiandae, facere! Dolore consequuntur quisquam sed facere veniam 
              ut sunt adipisci perferendis suscipit numquam exercitationem excepturi maiores, 
              possimus ipsam quas.
            </p>
            <a href="#" className='btn'>add to cart</a>
          </div>
          <div className="image">
            <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainbody
