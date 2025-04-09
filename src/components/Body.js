import React from 'react';
import Footer from './Footer';
import Nav from './Nav'
export default function Body() {
  return (
    <div>
      <div><hr /></div>

      <div className="box">
        <Nav/>
        <div className="intro">
          Welcome to YourBooks — your ultimate destination for insightful articles and captivating reads. Whether you're passionate about technology, lifestyle, health, or trending topics, YourBooks brings you curated content to fuel your curiosity and keep you informed. Start exploring and let every scroll inspire something new.

          <img src="/133540798_10233952.jpg" alt="Intro" />

        </div>

        <div className="content">
          <hr />
          <h1 class="wave-text">
  <span>T</span><span>o</span><span>p</span><p>-</p><span>A</span><span>r</span><span>t</span><span>i</span><span>c</span><span>l</span><span>e</span><span>s</span>
</h1>

<div className="articles">
  <div className="article">
    <img src="/4567307_27841.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>
  <div className="article">
    <img src="/8042278_43058.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>
  <div className="article">
    <img src="/8395653_43702.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>
  <div className="article">
    <img src="/9148013_4099582.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>
  <div className="article">
    <img src="/9720892_46516.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>
  <div className="article"></div>
  <div className="article">
    <img src="/12780649_5070388 (1).jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>

  <div className="article">
    <img src="/12780649_5070388.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>
  <div className="article">
    <img src="/25590862_ignn_z6d7_220310.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span>
    </div>
  </div>
   <div className="article">
    <img src="/133540798_10233952.jpg" alt="" />
    <div className="writing">
      <span>Author:Bill Gates</span>
      <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem asperiores autem esse consequatur tenetur eligendi.</span></div></div>  
</div>



        </div>
        <div className="tola">
          <Footer/>
        </div>
      </div>

    </div>
  );
}

